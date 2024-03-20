import React, { useState } from "react";
import Logo from "../../img/chef1.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdShoppingBasket } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import MobileNav from "./MobileNav";
import { useSelector } from "react-redux";
import Avatar from "../../img/avatar.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import DropDown from "./DropDown";

const Header = ({ setShowCart }) => {
  const { user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const [isOpen, setIsOpen] = useState(true);

  const [isOpenMobileNav, setIsOpenMobileNav] = useState(false);
  return (
    <header className="w-screen sticky z-50 bg-cardOverlay backdrop-blur-md md:p-3 md:px-4 lg:p-6 lg:px-16">
      {/* Tablet and Desktop */}
      <div className="hidden md:flex w-full justify-between itesm-center">
        <Link to={"/"}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={Logo} alt="Logo" className="md:w-6 lg:w-8 object-cover" />
            <p className="text-headingColor md:text-lg lg:text-xl font-bold">
              FoodZone
            </p>
          </motion.div>
        </Link>

        {/* navigation */}
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-8 items-center max-md:hidden"
        >
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer sm:text-sm lg:text-md text-base text-textColor transition-all duration-200 ease-in-out hover:text-headingColor"
          >
            <Link to="/">Home</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer sm:text-sm lg:text-md text-base text-textColor transition-all duration-200 ease-in-out hover:text-headingColor"
          >
            <Link to="/menu">Menu</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer sm:text-sm lg:text-md text-base text-textColor transition-all duration-200 ease-in-out hover:text-headingColor"
          >
            <Link to="/services">Services</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer sm:text-sm lg:text-md text-base text-textColor transition-all duration-200 ease-in-out hover:text-headingColor"
          >
            <Link to="/aboutUs">About Us</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer sm:text-sm lg:text-md text-base text-textColor transition-all duration-200 ease-in-out hover:text-headingColor"
          >
            <Link to="/contactus">Contact Us</Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            className="relative cursor-pointer text-textColor text-sm transition-all duration-200 ease-in-out hover:text-headingColor"
            onClick={() => setShowCart((prev) => !prev)}
          >
            <MdShoppingBasket className="w-6 h-6" />
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-white bg-cartNumBg flex items-center justify-center text-[14px] font-semibold">
              {cartItems.length}
            </div>
          </motion.li>
        </motion.ul>

        {/* User */}

        <div className={`group flex items-center gap-3 px-3 py-1 rounded-lg`}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className=" flex items-center justify-center"
          >
            <img
              src={user?.image || Avatar}
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer object-contain"
              alt="profile"
            />
            <p className="text-headingColor cursor-pointer flex items-center justify-center gap-2">
              <RiArrowDropDownLine />
            </p>
          </motion.div>
          {isOpen && <DropDown user={user} />}
        </div>
      </div>

      {/* Mobile */}
      <motion.div
        className="flex md:hidden w-full p-0 items-center justify-between"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
      >
        {isOpenMobileNav ? (
          <MobileNav onClose={setIsOpenMobileNav} setShowCart={setShowCart} />
        ) : (
          <div className="p-5 flex items-center justify-between w-full">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className=" flex items-center justify-center"
              onClick={() => setIsOpenMobileNav(!isOpenMobileNav)}
            >
              <HiOutlineMenuAlt2 className="text-headingColor text-4xl" />
            </motion.div>
            <Link to={"/"}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <img src={Logo} alt="Logo" className="w-8 object-cover" />
                <p className="text-headingColor text-xl font-bold">
                  Bentilzone
                </p>
              </motion.div>
            </Link>
            <div
              className={`flex items-center gap-3 px-3 py-1 rounded-lg relative`}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="group flex items-center justify-center"
              >
                <img
                  src={user?.photoURL ? user.photoURL : Avatar}
                  className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-2xl rounded-full cursor-pointer"
                  alt="user-profile"
                  onClick={() => setIsOpen(!isOpen)}
                />
                <p className="text-headingColor cursor-pointer flex items-center justify-center gap-2">
                  <RiArrowDropDownLine />
                </p>
                {isOpen && <DropDown user={user} />}
              </motion.div>
            </div>
          </div>
        )}
      </motion.div>
    </header>
  );
};

export default Header;

{
  /* <header className="sticky w-full flex z-50 justify-between px-16 py-6 max-lg:px-6 max-lg:py-4 top-0 bg-cardOverlay backdrop-blur-md">
      <div className="hidden max-md:block">
        <HiOutlineMenuAlt2
          className="w-8 h-8 cursor-pointer"
          onClick={() => setIsOpenMobileNav(true)}
        />
      </div>
      {isOpenMobileNav && <MobileNav onClose={setIsOpenMobileNav} />}


      <Link to="/" className="outline-none">
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2"
        >
          <img src={Logo} alt="logo" className="w-8 h-8" />
          <h1 className="text-xl text-headingColor font-bold">FoodZone</h1>
        </motion.div>
      </Link>


      <motion.ul
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex gap-8 items-center max-md:hidden"
      >
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer sm:text-sm lg:text-md text-base text-textColor transition-all duration-200 ease-in-out hover:text-headingColor"
        >
          <Link to="/">Home</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer sm:text-sm lg:text-md text-base text-textColor transition-all duration-200 ease-in-out hover:text-headingColor"
        >
          <Link to="/menu">Menu</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer sm:text-sm lg:text-md text-base text-textColor transition-all duration-200 ease-in-out hover:text-headingColor"
        >
          <Link to="/services">Services</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer sm:text-sm lg:text-md text-base text-textColor transition-all duration-200 ease-in-out hover:text-headingColor"
        >
          <Link to="/aboutUs">About Us</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="cursor-pointer sm:text-sm lg:text-md text-base text-textColor transition-all duration-200 ease-in-out hover:text-headingColor"
        >
          <Link to="/contactus">Contact Us</Link>
        </motion.li>
        <motion.li
          whileHover={{ scale: 1.1 }}
          className="relative cursor-pointer text-textColor text-sm transition-all duration-200 ease-in-out hover:text-headingColor"
          onClick={() => setShowCart((prev) => !prev)}
        >
          <MdShoppingBasket className="w-6 h-6" />
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-white bg-cartNumBg flex items-center justify-center text-[14px] font-semibold">
            {cartItems.length}
          </div>
        </motion.li>
      </motion.ul>


      {user ? (
        <div className="group relative">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-1"
          >
            <motion.img
              src={Avatar}
              alt="Avatar Img"
              className="w-10 h-10 rounded-full object-cover"
              onClick={() => setIsOpen(!isOpen)}
            />
            <RiArrowDropDownLine />
          </motion.div>
          {isOpen && <DropDown user={user} />}
        </div>
      ) : (
        <Link to="/signin">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex gap-4 items-center cursor-pointer"
          >
            <MdLogin className="w-6 h-6" />
            <p className="text-textColor">Login</p>
          </motion.div>
        </Link>
      )}
    </header> */
}
