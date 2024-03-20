import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineRestaurantMenu, MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import Logo from "../../img/chef1.png";
import { useSelector } from "react-redux";

const MobileNav = ({ onClose, setShowCart }) => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="w-screen h-screen  top-0 left-0 z-50">
      <div className="backdrop-blur-md  bg-cardOverlay flex flex-col px-10 py-6 h-screen">
        {/* Top */}
        <div className="flex items-center justify-between">
          <div className="relative" onClick={() => setShowCart(true)}>
            <MdShoppingBasket className="w-6 h-6" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-white bg-cartNumBg flex items-center justify-center text-[14px] font-semibold">
              {cartItems.length}
            </div>
          </div>
          <MdOutlineRestaurantMenu
            className="text-headingColor text-4xl"
            onClick={() => onClose(false)}
          />
        </div>

        {/* Center */}
        <ul className="flex flex-col gap-10 items-center justify-center mt-32">
          <li className="text-textColor">
            <Link to="/menu">Menu</Link>
          </li>
          <li className="text-textColor">
            <Link to="/services">Services</Link>
          </li>
          <li className="text-textColor">
            {" "}
            <Link to="/aboutUs">About Us</Link>
          </li>
          <li className="text-textColor">
            {" "}
            <Link to="/contactUs">Contact Us</Link>
          </li>
        </ul>

        {/* Bottom */}

        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-6 justify-center mt-24"
        >
          <img src={Logo} alt="logo" className="w-16 h-16" />
          <h1 className="text-3xl text-headingColor font-bold">FoodZone</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default MobileNav;
