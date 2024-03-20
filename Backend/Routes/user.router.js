const express = require("express");
const verifyUser = require("../Middleware/verifyUser");
const {
  getUserDetail,
  getAllUsers,
} = require("../Controllers/user.controller");

const router = express.Router();

router
  .get("/me", verifyUser, getUserDetail)
  .get("/all", verifyUser, getAllUsers);

module.exports = router;
