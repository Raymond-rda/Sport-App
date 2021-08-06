const pool = require("../db/dbconnection");
exports.findAll = async () => {
  try {
    const query = "SELECT * FROM admin WHERE status=?";
    const rlt = await pool.query(query, [1]);
    return rlt[0];
  } catch (error) {
    throw {
      message: error.message,
    };
  }
};

exports.find = (admin_id) => {
  return;
};
exports.findEmail = async (email) => {
  try {
    const query = "SELECT * FROM admin WHERE email = ? AND status = ? LIMIT 1";
    let result = await pool.query(query, [email, 1]);
    return result[0];
  } catch (error) {
    throw {
      message: error.message,
    };
  }
};
exports.findActive = async (id) => {
  try {
    const query = "SELECT * FROM admin WHERE admin_Id = ? AND status = ?";
    let result = await pool.query(query, [id, 1]);
    return result[0];
  } catch (error) {
    throw {
      message: error.message,
    };
  }
};
exports.insert = async (data) => {
  try {
    const query =
      "INSERT INTO admin (fname,lname,admin_image,email,phone,password) VALUES (?,?,?,?,?,?)";
    let result = await pool.query(query, [
      data.fname,
      data.lname,
      data.path,
      data.email,
      data.phone,
      data.password,
    ]);
    return result.affectedRows;
  } catch (error) {
    throw {
      message: error.message,
    };
  }
};
