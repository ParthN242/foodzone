import React from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdAddShoppingCart, MdDeleteForever } from "react-icons/md";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../Redux/Cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { deleteFoodItemAsync } from "../../Redux/Food/Food/foodApi";
import { firebaseDeleteImage } from "../../Firebase/function";
import { clearState } from "../../Redux/Food/Food/foodSlice";

const FoodItem = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);

  const { user } = useSelector((state) => state.user);

  const addFoodToCart = () => {
    if (cartItems.some((item) => item._id === data._id)) {
      toast.error("Item already in cart", {
        icon: <MdAddShoppingCart className="text-2xl text-cartNumBg" />,
        autoClose: 1000,
      });
    } else {
      toast.success("Item added in cart", {
        icon: <MdAddShoppingCart className="text-2xl text-green-600" />,
        autoClose: 1000,
      });
      dispatch(addToCart({ ...data }));
    }
  };

  const updateFoodItem = () => {
    navigate(`/admin/updatefood?id=${data._id}`);
  };

  const deleteFoodItem = async () => {
    firebaseDeleteImage(data.image);
    await dispatch(deleteFoodItemAsync(data._id));
    await dispatch(clearState());
    toast.success("Food Item Deleted Successfully", { autoClose: 2000 });
  };

  return (
    <motion.div
      whileTap={{ rotate: [0, -1, 1, -1, 0] }}
      className="min-w-[300px] backdrop:blur-md bg-cardOverlay h-auto flex flex-col items-end px-3 py-2 gap-1 rounded-md"
    >
      {/*  */}
      <div className="w-full flex items-center justify-between">
        <motion.img
          whileHover={{ scale: 1.2 }}
          src={data.image}
          alt="foodimage"
          className="w-48 h-40 -mt-8 object-contain cursor-pointer"
        />
        <div>
          {user.role === "admin" ? (
            <>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="bg-green-600 mb-3 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
                onClick={updateFoodItem}
              >
                <BiEditAlt className="text-white md:text-xl" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
                onClick={deleteFoodItem}
              >
                <MdDeleteForever className="text-white md:text-xl" />
              </motion.div>
            </>
          ) : (
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="bg-red-600 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer"
              onClick={addFoodToCart}
            >
              <MdAddShoppingCart className="text-white md:text-xl" />
            </motion.div>
          )}
        </div>
      </div>
      {/*  */}
      <div className="text-headingColor capitalize text-lg">{data.title}</div>
      <div className="text-textColor capitalize text-sm">
        {data.description}
      </div>
      <div className="font-semibold">
        <span className="text-red-600">₹</span> {data.price}
      </div>
    </motion.div>
  );
};

export default FoodItem;
