import React, { useState } from "react";
import CartHeader from "./CartHeader";
import { motion } from "framer-motion";
import CartBody from "./CartBody";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import CheckOut from "../Checkout/CheckOut";

const Cart = ({ setShowCart }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  return (
    <>
      {checkoutOpen ? (
        <CheckOut setCheckoutOpen={setCheckoutOpen} />
      ) : (
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className="w-[350px] h-screen fixed top-0 right-0 bg-white z-[100] backdrop-blur-md drop-shadow-md max-md:w-full"
        >
          <CartHeader setShowCart={setShowCart} />
          {cartItems.length >= 1 && cartItems && (
            <CartBody setCheckoutOpen={setCheckoutOpen} />
          )}
          {cartItems.length <= 0 && <EmptyCart />}
        </motion.div>
      )}
    </>
  );
};

export default Cart;
