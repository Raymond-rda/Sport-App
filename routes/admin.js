const Router = require("express");
const { check } = require("express-validator");

const router = Router();

const {
  getAllAdmin,
  getAdminById,
  createAdmin,
  adminLogin,
} = require("../controllers/admin");

router.get("/api/admin", getAllAdmin);

router.get("/api/admin/:admin_id/:email", getAdminById);
router.post(
  "/api/admincreate",
  [
    check("fname", "fname is required").not().isEmpty(),
    check("lname", "lname is required").not().isEmpty(),
    check("phone", "phone is required").not().isEmpty(),
    check("email", "email is required").not().isEmpty(),
    check("password", "Password is required").not().isEmpty(),
  ],
  createAdmin
);
router.post(
  "/api/login",
  [
    check("email", "email is required").not().isEmpty(),
    check("password", "Password is required").not().isEmpty(),
  ],
  adminLogin
);
module.exports = router;
