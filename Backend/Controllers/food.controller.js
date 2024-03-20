const Food = require("../Models/food.model");

// Create Food
exports.createFoodItem = async (req, res, next) => {
  try {
    const food = new Food({ ...req.body, userRef: req.user._id });

    await food.save();

    res.status(201).json({ success: true, message: "Food Item Created", food });
  } catch (error) {
    next(error);
  }
};

// Get All Food Item
exports.getAllFoodItem = async (req, res, next) => {
  const { category } = req.query;

  let food;
  if (category) food = await Food.find({ category });
  else food = await Food.find();

  res.status(200).json({ success: true, food });
};

// Update Food
exports.updateFoodItem = async (req, res, next) => {
  try {
    const food = await Food.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    await food.save();

    console.log("food: ", food);
    res.status(200).json({ success: true, message: "Food Item Updated", food });
  } catch (error) {
    next(error);
  }
};

// Delete Food
exports.deleteFoodItem = async (req, res, next) => {
  try {
    await Food.findByIdAndDelete(req.params.id, req.body);

    res.status(200).json({ success: true, message: "Food Item Deleted" });
  } catch (error) {
    next(error);
  }
};
