const pool = require("../db/dbconnection");
exports.findAll = async () => {
  try {
    const query = "SELECT * FROM news WHERE status=?";
    const rlt = await pool.query(query, [1]);
    return rlt[0];
  } catch (error) {
    throw {
      message: error.message,
    };
  }
};

exports.find = async (news_id) => {
  try {
    const query = "SELECT * FROM news WHERE news_id=? AND status=?";
    const rlt = await pool.query(query, [news_id, 1]);
    return rlt[0];
  } catch (error) {
    throw {
      message: error.message,
    };
  }
};

exports.findByCategory = async (category) => {
  try {
    const query = "SELECT * FROM news WHERE category=? AND status=?";
    const rlt = await pool.query(query, [category, 1]);
    return rlt[0];
  } catch (error) {
    throw {
      message: error.message,
    };
  }
};

exports.findByType = async (type) => {
  try {
    const query = "SELECT * FROM news WHERE types=? AND status=?";
    const rlt = await pool.query(query, [type, 1]);
    return rlt[0];
  } catch (error) {
    throw {
      message: error.message,
    };
  }
};

exports.insert = async (data) => {
  try {
    const query =
      "INSERT INTO news (title,category,image,image_detail,decription,types,admin_Id) VALUES (?,?,?,?,?,?,?)";
    const rlt = await pool.query(query, [
      data.title,
      data.category,
      data.image,
      data.image_detail,
      data.decription,
      data.types,
      data.admin_Id,
    ]);
    return rlt.affectedRows;
  } catch (error) {
    throw {
      message: error.message,
    };
  }
};
exports.update = async (data, news_id) => {
  try {
    const query =
      "UPDATE news SET  title=?,category=?,decription=?,types=? WHERE news_id=?";
    const rlt = await pool.query(query, [
      data.title,
      data.category,
      data.decription,
      data.types,
      news_id,
    ]);
    return rlt.affectedRows;
  } catch (error) {
    throw {
      message: error.message,
    };
  }
};

exports.delete = async (news_id) => {
  try {
    const query = "DELETE FROM news WHERE news_id=? AND status=?";
    const rlt = await pool.query(query, [news_id, 1]);
    return rlt.affectedRows;
  } catch (error) {
    throw {
      message: error.message,
    };
  }
};

exports.updateMainImg = async (data) => {
  try {
    const query = "UPDATE news SET  image=? WHERE news_id=? AND status=?";
    const rlt = await pool.query(query, [data.image, data.news_id, 1]);
    return rlt.affectedRows;
  } catch (error) {
    throw {
      message: error.message,
    };
  }
};
