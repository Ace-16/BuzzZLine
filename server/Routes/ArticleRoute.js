const express = require("express");
const router = express.Router();
const { saveArticle, removeArticle } = require("../controllers/ArticleController");

router.post("/save-article", saveArticle);
router.post("/remove-article", removeArticle);
module.exports = router;
