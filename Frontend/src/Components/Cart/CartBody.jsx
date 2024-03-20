import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const CartBody = ({ setCheckoutOpen }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const subTotal = cartItems.reduce((t, i) => {
    const total = i.product.price * i.qty + t;
    return total;
  }, 0);
  return (
    <div className="w-full h-full rounded-t-[2rem] bg-cartBg flex flex-col ">
      {/* CartItems */}
      <div className="flex flex-col overflow-y-scroll gap-3 px-6 py-10 cartScrollbar h-[50%]">
        {cartItems.map((item, index) => (
          <CartItem data={item} key={index} />
        ))}
      </div>
      {/* Total */}
      <div className="bg-cartItem rounded-t-[2rem] w-full h-[50%] mb-5 flex flex-col justify-evenly px-8 py-10 gap-6">
        <div className="flex justify-between text-gray-400 text-lg">
          <p>Sub Total</p>
          <p>-</p>
          <p>
            <span className="text-sm text-red-600">₹</span> {subTotal}
          </p>
        </div>
        <div className="flex justify-between text-gray-400 text-lg">
          <p>Delivery</p>
          <p>-</p>
          <p>
            <span className="text-sm text-red-600">₹</span> 0
          </p>
        </div>
        <div className="w-full h-[1px] bg-gray-400"></div>
        <div className="flex justify-between text-gray-50 text-lg ">
          <p>TOTAL</p>
          <p>-</p>
          <p>
            <span className="text-sm text-red-600">₹</span> {subTotal}
          </p>
        </div>
        <motion.button
          className="text-white text-lg bg-gradient-to-tr from-orange-400 to-orange-600 p-2 rounded-full"
          onClick={() => setCheckoutOpen(true)}
          whileTap={{ scale: 0.9 }}
        >
          Checkout ₹{subTotal}
        </motion.button>
      </div>
    </div>
  );
};

export default CartBody;
