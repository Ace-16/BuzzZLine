const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const articleSchema = new mongoose.Schema({
  title: String,
  urlToImage: String,
  description: String,
  url: String,
})

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
    trim: true, 
    lowercase: true, 
    match: [/\S+@\S+\.\S+/, "Please enter a valid email address"],
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  savedArticles: {
    type: [articleSchema],
  }
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);