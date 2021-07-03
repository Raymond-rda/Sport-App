const Router = require("express");
const { check } = require("express-validator");

const router = Router();

const auth = require("../middleware/checkAuth");
const uploadImg = require("../middleware/validatenewimg");

const { getAllNews, createNews } = require("../controllers/news");

router.get("/api/news", getAllNews);

router.post(
  "/api/news",
  auth,
  [
    uploadImg.single("image"),
    check("title", "title is required").not().isEmpty(),
    check("category", "category is required").not().isEmpty(),
    check("image_detail", "category is required").not().isEmpty(),
    check("decription", "category is required").not().isEmpty(),
    check("types", "category is required").not().isEmpty(),
  ],
  createNews
);
module.exports = router;
