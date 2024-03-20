const User = require("../Models/user.model");
const ErrorHandler = require("../Utils/errorHandler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Create User
exports.createUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.create({ email, password });

    res.status(201).json({ success: true, user: email });
  } catch (error) {
    next(error);
  }
};

// Login User
exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) return next(new ErrorHandler("Invalid Email", 401));

    const isPasswordMatch = bcrypt.compareSync(password, user.password);

    if (!isPasswordMatch)
      return next(new ErrorHandler("Invalid Password", 401));

    const { password: pass, ...rest } = user._doc;

    const token = jwt.sign({ id: user._id }, process.env.JWT_SCREATE);

    const option = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.cookie("token", token, option);

    res.status(200).json({ success: true, user: rest });
  } catch (error) {
    next(error);
  }
};

// Sign Out
exports.signOutUser = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ success: true, message: "Sign Out Successfully" });
  } catch (error) {
    next(error);
  }
};
