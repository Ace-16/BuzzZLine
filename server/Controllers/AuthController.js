const User = require("../Models/UserModel");
const {createSecretToken} = require("../util/SecretToken");
const bcrypt = require("bcrypt");

module.exports.SignUp = async (req, res,next) => {
  try {
    const {email, password, username, createdAt} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser){
      return res.json({message: "User already exists"});
    }
    if (!email) {
      return res.json({message: "Email is required"});
    }else if(!password){
      return res.json({message: "Password is required"});
    }else if(!username){
      return res.json({message: "Password is required"});
    }
    const user = await User.create({email, password, username, createdAt});
    const token = createSecretToken(user._id);
    res.cookie("token",token,{
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({message: "User signed in successfully", success: true, user});
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    if(!email || !password)
      return res.json({message: "All fields are required"})
    const user = await User.findOne({ email});
    if(!user)
      return res.json({message: "Incorrect Email"})
    const auth = await bcrypt.compare(password, user.password)
    if(!auth)
      return res.json({message: "Incorrect password"})
    const token = createSecretToken(user._id);
    res.cookie("token",token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(201).json({message: "User logged in successfully", success: true});
    next()
  } catch (error) {
    console.log(error);
  }
}