const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter title"],
    maxLenght: [20, "Max Length is 20 characters"],
    unique: [true, "Title is already takken"],
  },
  quantity: {
    type: Number,
    required: [true, "Please enter quantity"],
    max: [100, "Max Length is 100"],
  },
  calories: {
    type: Number,
    required: [true, "Please enter calories"],
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: [true, "Please enter cateogry"],
  },
  price: {
    type: Number,
    required: [true, "Please enter price"],
  },
  description: {
    type: String,
    required: [true, "Please enter description"],
  },
  userRef: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
});

const foodModel = mongoose.model("food", foodSchema);

module.exports = foodModel;
