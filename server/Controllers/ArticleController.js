const User = require("../Models/UserModel");

module.exports.saveArticle = async (req, res,) => {
  try {
    const { userId, article } = req.body;
    if (!userId) {
      return res.status(400).json({ success: false, message: "UserId is required" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    const existingArticle = user.savedArticles?.find(
      (savedArticle) => savedArticle.title === article.title
    );
    if (existingArticle) {
      return res.json({ success: false, message: "Article already added" });
    }
    user.savedArticles.push(article);
    await user.save();
    return res.json({ success: true, message: "Article added" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
};

module.exports.removeArticle = async (req, res) => {
  try {
    const {userId, article} = req.body;
    if (!userId) {
      return res.status(400).json({ success: false, message: "UserId is required" });
    }
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    const existingArticle = user.savedArticles?.find(
      (savedArticle) => savedArticle.title === article.title
    );
    if (existingArticle) {
      user.savedArticles.splice(article, 1);
    }
    await user.save();
    return res.json({ success: true, message: "Article removed", user });
  } catch (error) {
    
  }
}