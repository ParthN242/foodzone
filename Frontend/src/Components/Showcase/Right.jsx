import React from "react";
import HeroBg from "../../img/hero-bg.png";
import data from "../../Utils/showcaseStatic";
import { motion } from "framer-motion";

const Card = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 max-lg:gap-2 p-4 max-lg:p-2 backdrop-blur-lg drop-shadow-lg min-w-[200px] max-lg:min-w-[150px] h-[210px] max-lg:h-[150px] text-black bg-cardOverlay rounded-lg">
      <motion.img
        whileHover={{ scale: 1.3 }}
        src={data.imgSrc}
        alt=""
        className="w-36 h-32 max-lg:w-24 max-lg:h-24 -mt-14 object-contain"
      />
      <h1 className="capitalize text-textColor font-semibold text-lg max-lg:text-sm">
        {data.title}
      </h1>
      <p className="text-lg max-lg:text-xs text-gray-400 font-semibold">
        {data.desc}
      </p>
      <p className="font-semibold text-sm">
        <span className="text-orange-500">₹</span> {data.price}
      </p>
    </div>
  );
};
123456789;

const Right = () => {
  return (
    <div className="flex items-center justify-center relative">
      <img
        src={HeroBg}
        alt="image"
        className="ml-auto w-auto max-lg:w-[100%] h-[550px] max-lg:h-[420px]"
      />
      <div className="absolute top-6 left-0 w-full h-full flex items-center justify-center gap-4 flex-wrap">
        {data.map((item, i) => (
          <Card data={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Right;
