const Router = require("express");
const { check } = require("express-validator");

const router = Router();

const auth = require("../middleware/checkAuth");
const uploadImg = require("../middleware/validatenewimg");

const {
  getAllNews,
  createNews,
  getNewById,
  updateNew,
  deleteNew,
  getNewsByType,
  getNewsByCategory,
  updateNewMainIng,
} = require("../controllers/news");

// @Route GET /api/news
// @Desc Get all news
// @Public
router.get("/api/news", getAllNews);

// @Route POST /api/news
// @Desc used to insert new
// @Private
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

// @Route GET /api/news/:news_id
// @Desc Get all a new by id
// @Public
router.get("/api/news/:news_id", getNewById);

// @Route GET /api/news/category/:category
// @Desc Get all a new by category
// @Public
router.get("/api/news/category/:category", getNewsByCategory);

// @Route GET /api/news/type/:type
// @Desc Get all a new by type
// @Public
router.get("/api/news/type/:type", getNewsByType);

// @Route DELETE /api/news/:news_id
// @Desc Get all a new by id
// @Public
router.delete("/api/news/:news_id", auth, deleteNew);

// @Route PATCH /api/news/:news_id
// @Desc Update some new data
// @private
router.patch(
  "/api/news/updte/:news_id",
  auth,
  check("title", "title is required").not().isEmpty(),
  check("category", "category is required").not().isEmpty(),
  check("image_detail", "category is required").not().isEmpty(),
  check("decription", "category is required").not().isEmpty(),
  check("types", "category is required").not().isEmpty(),
  updateNew
);

// @Route PATCH /api/news/newimg
// @Desc Update news image
// @private
router.patch(
  "/api/news/newimg",
  auth,
  uploadImg.single("image"),
  check("news_id", "news_id is required").not().isEmpty(),
  updateNewMainIng
);
module.exports = router;
