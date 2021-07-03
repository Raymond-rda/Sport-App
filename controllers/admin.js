const jwt = require("jsonwebtoken");
const config = require("config");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const admin = require("../models/admin");
const getAllAdmin = async (req, res) => {
  try {
    const rlt = await admin.findAll();
    res.status(200).send(rlt);
    return;
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAdminById = (req, res) => {
  const { admin_id, email } = req.params;

  res.send(req.params);

  return;
};

const createAdmin = async (req, res) => {
  const errors = validationResult(req);

  // Check if there is errors and return them

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }
  try {
    // Encript password
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    let body = req.body;
    body.password = hashedPassword;

    const adminExist = await admin.findEmail(req.body.email);
    if (adminExist.length < 1) {
      return res.status(400).json({
        msg: "Email in use, please choose other one!",
      });
    }
    const rlt = await admin.insert(body);
    res.status(201).send(rlt);
    return;
  } catch (error) {
    res.status(500).send(error);
  }
};

// Admin login

const adminLogin = async (req, res, next) => {
  const errors = validationResult(req);
  // check is there is errors & return them
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array(),
    });
  }
  try {
    const adminData = await admin.findEmail(req.body.email);
    if (adminData.length < 1) {
      return res.status(400).json({
        msg: "Wrong email or Password!, Please try Again or Contact Administrator.",
      });
    }
    const isEqual = await bcrypt.compare(
      req.body.password,
      adminData[0].password
    );
    if (!isEqual) {
      return res.status(400).json({
        msg: "Wrong email or Password!, Please try Again or Contact Administrator.",
      });
    }
    const token = jwt.sign(
      {
        admin_id: adminData[0].admin_Id,
        fname_id: adminData[0].fname,
        fname: adminData[0].lname,
      },
      config.get("jwtSecret"),
      {
        expiresIn: "6h",
      }
    );

    const adminRlt = await admin.findActive(adminData[0].admin_Id);
    delete adminRlt[0].password;

    if (adminRlt) {
      return res.status(200).json({
        msg: "User login Successfully",
        data: ({} = adminRlt[0]),
        token: token,
        resultCount: adminRlt.length,
      });
    }
  } catch (error) {
    return next(error);
  }
};
module.exports = { getAllAdmin, getAdminById, createAdmin, adminLogin };
