const news = require("../models/news");
const { validationResult } = require("express-validator");

const getAllNews = async (req, res) => {
  try {
    const rlt = await news.findAll();
    res.status(200).send(rlt);
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
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};
module.exports = { getAllNews, createNews };
