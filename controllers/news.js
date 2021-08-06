const news = require("../models/news");
const admin = require("../models/admin");

const { validationResult } = require("express-validator");

const getAllNews = async (req, res) => {
  try {
    let allNews = [];

    const rlt = await news.findAll();
    for (const key in rlt) {
      if (Object.hasOwnProperty.call(rlt, key)) {
        const newElement = rlt[key];

        const adminRlt = await admin.findActive(newElement.admin_Id);
        const adminNe = {
          admin_Id: adminRlt[0].admin_Id,
          fname: adminRlt[0].fname,
          lname: adminRlt[0].lname,
          admin_image: adminRlt[0].admin_image,
          phone: adminRlt[0].phone,
          email: adminRlt[0].email,
        };

        allNews.push({ ...newElement, admin: adminNe });
      }
    }
    res.status(200).send(allNews);

    return;
  } catch (error) {
    res.status(500).send(error);
  }
};

createNews = async (req, res) => {
  const errors = validationResult(req);

  // Check if there is errors and return them

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  try {
    let body = req.body;
    body.admin_Id = req.systemUser.admin_id;
    // Validate image
    if (req.file == undefined) {
      return res.status(404).json({
        msg: "You must select  a file.",
      });
    }
    body.image = "public/news-images/" + req.file.filename;

    const result = await news.insert(body);

    return res.status(200).json({
      msg: "Created",
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};

const getNewById = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
    });
  }
  try {
    const rlt = await news.find(req.params.news_id);
    return res.status(200).json({
      data: rlt,
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};

const getNewsByCategory = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
    });
  }
  try {
    const rlt = await news.findByCategory(req.params.category);
    return res.status(200).json({
      data: rlt,
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};

const getNewsByType = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
    });
  }
  try {
    const rlt = await news.findByType(req.params.type);
    return res.status(200).json({
      data: rlt,
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};
const updateNew = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
    });
  }
  try {
    const existNews = await news.find(req.params.news_id);
    if (existNews.length <= 0) {
      return res.status(404).json({
        msg: "New your trying to update does not exist",
      });
    }
    await news.update(req.body, req.params.news_id);
    return res.status(200).json({
      msg: "Updated",
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};
const deleteNew = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array(),
    });
  }
  try {
    const existNews = await news.find(req.params.news_id);
    if (existNews.length <= 0) {
      return res.status(404).json({
        msg: "New your trying to delete does not exist",
      });
    }

    const rlt = await news.delete(req.params.news_id);
    return res.status(200).json({
      data: rlt,
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};

const updateNewMainIng = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  try {
    let body = req.body;
    // Validate image
    if (req.file == undefined) {
      return res.status(404).json({
        msg: "You must select  a file.",
      });
    }
    body.image = "public/news-images/" + req.file.filename;

    const existNews = await news.find(req.body.news_id);
    if (existNews.length <= 0) {
      return res.status(404).json({
        msg: "New your trying to update does not exist",
      });
    }
    await news.updateMainImg(req.body);
    return res.status(200).json({
      msg: "Updated",
    });
  } catch (error) {
    return res.status(500).json({
      errors: error,
    });
  }
};
module.exports = {
  getAllNews,
  createNews,
  getNewById,
  getNewsByCategory,
  getNewsByType,
  updateNew,
  deleteNew,
  updateNewMainIng,
};
