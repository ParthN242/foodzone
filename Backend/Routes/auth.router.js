const express = require("express");
const {
  createUser,
  loginUser,
  signOutUser,
} = require("../Controllers/auth.controller");
const verifyUser = require("../Middleware/verifyUser");

const router = express.Router();

router
  .post("/create", createUser)
  .post("/login", loginUser)
  .get("/signout", signOutUser);

module.exports = router;
