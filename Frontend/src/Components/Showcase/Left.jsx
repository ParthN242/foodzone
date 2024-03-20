import React from "react";
import DeliveryImg from "../../img/delivery.png";
import { motion } from "framer-motion";

const Left = () => {
  return (
    <div className="flex flex-col gap-2 items-start justify-center">
      {/*  */}
      <div className="flex items-center gap-2 bg-orange-100 rounded-full px-4 py-1">
        <p className="text-base text-orange-500 font-bold">Bike Delivery</p>
        <div className="bg-white rounded-full w-8 h-8 overflow-hidden drop-shadow-lg">
          <img
            src={DeliveryImg}
            alt="deliveryImage"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      {/*  */}
      <h1 className="text-[4rem] max-lg:text-[2rem] tracking-wide text-headingColor font-bold">
        The Fastest Food Delivery in{" "}
        <span className="text-orange-500">Accra</span>
      </h1>
      {/*  */}
      <p className="text-textColor w-[80%] max-md:w-[100%] max-md:text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam
        delectus sed, vel quaerat, libero nesciunt debitis, architecto
        repudiandae accusamus aut exercitationem nisi non doloribus! Temporibus
        officia architecto reiciendis blanditiis.
      </p>
      {/*  */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        type="button"
        className="text-white px-4 py-2 bg-orange-500 rounded-lg duration-300 hover:shadow-lg  max-md:w-full"
      >
        Order Now
      </motion.button>
    </div>
  );
};

export default Left;
