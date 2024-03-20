import React, { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Container from "../../Container/Container";
import { useSelector } from "react-redux";
import filterFood from "../../../Utils/filterFood";

const FruitSection = () => {
  const { foodItems } = useSelector((state) => state.foodItems);
  const [scrollValue, setScrollValue] = useState(0);
  const filterFooditems = filterFood(foodItems, "fruits");
  return (
    <div className="w-full my-5">
      {/* Top */}
      <div className="flex justify-between items-center">
        {/* Title */}
        <h1 className="text-2xl relative before:absolute before:w-32 before:h-1 before:bg-gradient-to-tr before:from-orange-400 before:to-orange-600 before:rounded before:left-0 before:bottom-0 text-headingColor capitalize font-semi-bold leading-[50px]">
          Our Fresh & Healthy Fruits
        </h1>
        {/* Arrows */}
        <div className="flex items-center gap-4 text-lg">
          <div
            className="bg-orange-400 text-white w-8 h-8 rounded-lg flex justify-center items-center hover:bg-orange-600 cursor-pointer transition-all duration-200 ease-in"
            onClick={() => setScrollValue(-1000)}
          >
            <MdChevronLeft className="text-lg text-white" />
          </div>
          <div
            className="bg-orange-400 text-white w-8 h-8 rounded-lg flex justify-center items-center hover:bg-orange-600 cursor-pointer transition-all duration-200 ease-in"
            onClick={() => setScrollValue(1000)}
          >
            <MdChevronRight className="text-lg text-white" />
          </div>
        </div>
      </div>
      {/* Bottom */}
      <Container foodItems={filterFooditems} scrollOffset={scrollValue} />
    </div>
  );
};

export default FruitSection;
