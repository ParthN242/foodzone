import React from "react";
import ChefImg from "../../img/chef1.png";
import { motion } from "framer-motion";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-start max-md:justify-center">
        <motion.div
          className="flex items-center gap-10"
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        >
          <motion.img
            src={ChefImg}
            alt=""
            className="w-36"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          />
          <p className="text-2xl font-semibold text-headingColor">FoodZone</p>
        </motion.div>
      </div>
      <div className="w-full h-[2px] bg-gray-300 my-8 max-md:my-3"></div>
      <div className="flex items-center justify-between max-md:flex-col text-gray-500 max-md:text-sm">
        <div>© {new Date().getFullYear()} FoodZoneTM. All Rights Reserved.</div>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 md:text-xl">
          <motion.div
            whileTap={{ scale: 1.1 }}
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
          >
            <BsDribbble />
          </motion.div>
          <motion.div
            whileTap={{ scale: 1.1 }}
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
          >
            <BsGithub />
          </motion.div>
          <motion.div
            whileTap={{ scale: 1.1 }}
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
          >
            <BsLinkedin />
          </motion.div>
          <motion.div
            whileTap={{ scale: 1.1 }}
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
          >
            <BsTwitter />
          </motion.div>
          <motion.div
            whileTap={{ scale: 1.1 }}
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
          >
            <BsInstagram />
          </motion.div>
          <motion.div
            whileTap={{ scale: 1.1 }}
            className="text-textColor h-10 w-10 bg-primary rounded-full flex items-center justify-center"
          >
            <BsFacebook />
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
