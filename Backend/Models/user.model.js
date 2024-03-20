const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please Enter Email"],
      validate: [isEmail, "Please Ente Valid Email"],
      unique: [true, "Email is already register"],
    },
    avatar: {
      type: String,
      default: "",
    },
    password: {
      type: String,
      required: [true, "Please Enter Password"],
      max: [8, "Password Length Must Be 8 Characters"],
      select: false,
    },
    role: {
      type: String,
      default: "user",
      required: true,
    },
  },
  { timestamps: true }
);

// Password Hasing
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const bcryptPassword = bcrypt.hashSync(this.password, 10);
    this.password = bcryptPassword;
  }
  next();
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
