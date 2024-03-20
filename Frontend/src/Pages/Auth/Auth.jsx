import { motion } from "framer-motion";
import ChefImg from "../../img/chef1.png";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const ImageBox = () => {
  return (
    <div className="max-md:w-8/12 w-6/12 mb-6 max-md:hidden">
      <motion.img
        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
        src={ChefImg}
        alt="Chef image"
        className="w-96 max-lg:w-64 max-lg:mx-auto cursor-pointer"
      />
    </div>
  );
};

const ProviderAuth = () => {
  return (
    <div className="flex items-center justify-center gap-6">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex items-center gap-2 bg-white hover:bg-slate-100 p-2 px-8 rounded cursor-pointer border border-gray-200 shadow"
      >
        <FaGithub className="w-6 h-6" />{" "}
        <p className="text-textColor">Github</p>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex items-center gap-2 bg-white hover:bg-slate-100 p-2 px-8 rounded cursor-pointer border border-gray-200 shadow"
      >
        <FcGoogle className="w-6 h-6" />{" "}
        <p className="text-textColor">Google</p>
      </motion.div>
    </div>
  );
};

export { ImageBox, ProviderAuth };
