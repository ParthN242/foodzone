import React, { useEffect, useState } from "react";
import AdminHeader from "../Header/AdminHeader";
import {
  MdOutlineProductionQuantityLimits,
  MdOutlineFastfood,
  MdOutlineFoodBank,
  MdOutlineDataSaverOn,
} from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { BiCategory, BiFoodMenu } from "react-icons/bi";
import { motion } from "framer-motion";
import categories from "../../../Utils/categories";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { updateFoodItemAsync } from "../../../Redux/Food/Food/foodApi";
import { clearState } from "../../../Redux/Food/Food/foodSlice";
import FoodImage from "./FoodImage";
import { useNavigate } from "react-router-dom";

const UpdateFood = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { success, error } = useSelector((state) => state.food);
  const { foodItems } = useSelector((state) => state.foodItems);

  const queryParams = new URLSearchParams(window.location.search);
  const foodId = queryParams.get("id");

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [calories, setCalories] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [loadingImg, setLoadingImg] = useState(false);

  // Submit Handler
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !title ||
      !price ||
      !description ||
      !quantity ||
      !calories ||
      !category ||
      !image
    ) {
      toast.warn("Please enter all fields");
      return;
    }

    const data = {
      title,
      price,
      category,
      description,
      quantity,
      calories,
      image,
    };
    console.log({
      data,
    });
    toast.info("Updating Food Item...", { icon: false, autoClose: 1000 });
    dispatch(updateFoodItemAsync({ foodId, data }));
  };
  // Clear Form
  const clearForm = () => {
    setTitle("");
    setCategory("");
    setPrice("");
    setImage("");
    setCalories("");
    setQuantity("");
    setDescription("");
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const foodId = queryParams.get("id");
    const foodItem = foodItems.find((item) => item._id === foodId);
    setTitle(foodItem?.title);
    setCategory(foodItem?.category);
    setPrice(foodItem?.price);
    setImage(foodItem?.image);
    setCalories(foodItem?.calories);
    setQuantity(foodItem?.quantity);
    setDescription(foodItem?.description);
    if (success) {
      toast.dismiss();
      toast.success("Food Item Updated Succefully");
      clearForm();
      dispatch(clearState());
      navigate("/");
    }
    if (error) {
      toast.dismiss();
      toast.error(error);
    }
  }, [success, error, window.location.search]);

  return (
    <section>
      {/* Header */}
      <AdminHeader pageTitle="Update Food" />
      <div className="px-8 py-4">
        {/* Form */}
        <form
          onSubmit={submitHandler}
          className="border-[1px] border-gray-300 rounded-lg p-4 flex flex-col gap-4"
        >
          {/* Title */}
          <div className="flex gap-3 items-center border-b border-gray-300 py-3">
            <MdOutlineFastfood className="text-xl text-textColor" />
            <input
              type="text"
              name="title"
              placeholder="Enter food name"
              className="w-full outline-none text-md bg-transparent"
              onChange={(e) => setTitle(e.target.value)}
              value={title || ""}
            />
          </div>
          {/* Category */}
          <div className="flex items-center gap-3">
            <div className="flex flex-1 gap-3 items-center border-b border-gray-300 py-3">
              <BiCategory className="text-xl text-textColor" />
              <select
                name="category"
                className="bg-transparent outline-none w-full capitalize text-base border-2 border-gray-200 p-2 rounded-md cursor-pointer"
                onChange={(e) => setCategory(e.target.value)}
                value={category}
              >
                <option
                  defaultValue={category ? category : "Select Category"}
                  value=""
                >
                  Select Category
                </option>
                {categories.map((item) => (
                  <option key={item.id} value={item.urlParam}>
                    {item.name || ""}
                  </option>
                ))}
              </select>
            </div>
            {/* Quantity */}
            <div className="flex flex-1 gap-3 items-center border-b border-gray-300 py-3">
              <MdOutlineProductionQuantityLimits className="text-xl text-textColor" />
              <input
                type="number"
                placeholder="Quantity"
                className="w-full outline-none text-md bg-transparent"
                onChange={(e) => setQuantity(+e.target.value)}
                value={quantity || ""}
              />
            </div>
          </div>
          {/* Image */}
          <div className="h-[420px] border border-gray-300 border-dotted flex items-center justify-center">
            <FoodImage
              image={image}
              setImage={setImage}
              loadingImg={loadingImg}
              setLoadingImg={setLoadingImg}
            />
          </div>
          {/* Calories */}
          <div className="flex items-center gap-3">
            <div className="flex flex-1 gap-3 items-center border-b border-gray-300 py-3">
              <MdOutlineFoodBank className="text-xl text-textColor" />
              <input
                type="number"
                name="calories"
                placeholder="Calories"
                className="w-full outline-none text-md bg-transparent"
                onChange={(e) => setCalories(+e.target.value)}
                value={calories || ""}
              />
            </div>
            {/* Price */}
            <div className="flex flex-1 gap-3 items-center border-b border-gray-300 py-3">
              <GiTakeMyMoney className="text-xl text-textColor" />
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="w-full outline-none text-md bg-transparent"
                onChange={(e) => setPrice(+e.target.value)}
                value={price || ""}
              />
            </div>
          </div>
          {/* Description */}
          <div className="flex gap-3 items-center border-b border-gray-300 py-3">
            <BiFoodMenu className="text-xl text-textColor" />
            <input
              type="text"
              placeholder="Short Description"
              className="w-full outline-none text-md bg-transparent"
              onChange={(e) => setDescription(e.target.value)}
              value={description || ""}
            />
          </div>
          {/* Save Button */}
          <div className="flex justify-end">
            <motion.button
              whileHover={{ scale: 1.1 }}
              disabled={loadingImg}
              className="py-2 px-12 rounded bg-orange-500 flex items-center justify-center gap-2 text-white text-lg"
            >
              Update <MdOutlineDataSaverOn />
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateFood;
