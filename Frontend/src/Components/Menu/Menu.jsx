import React, { useState } from "react";
import Filter from "./Filter";
import Container from "../Container/Container";
import { useSelector } from "react-redux";
import filterFood from "../../Utils/filterFood";

const Menu = () => {
  const { foodItems } = useSelector((state) => state.foodItems);
  const [selectedCategory, setSelectedCategory] = useState("menu");

  const filterFoodItems = filterFood(foodItems, selectedCategory);
  return (
    <div className="flex flex-col items-center my-5">
      <h1 className="text-2xl relative before:absolute before:w-32 before:h-1 before:bg-gradient-to-tr before:from-orange-400 before:to-orange-600 before:rounded before:left-6 before:bottom-0 text-headingColor capitalize font-semi-bold leading-[50px] text-center">
        Our Hot Dishes
      </h1>
      <Filter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Container foodItems={filterFoodItems} row />
    </div>
  );
};

export default Menu;
