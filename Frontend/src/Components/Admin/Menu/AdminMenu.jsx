import React, { useEffect, useState } from "react";
import AdminHeader from "../Header/AdminHeader";
import { FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import FoodItem from "../../FoodItem/FoodItem";

const AdminMenu = () => {
  const { foodItems } = useSelector((state) => state.foodItems);
  const [search, setSearch] = useState("");
  const [filterFoodItems, setFilterFoodItems] = useState([]);

  const filterFood = () => {
    const filter = foodItems.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilterFoodItems(filter);
  };

  const searchFood = (e) => {
    setSearch(e.target.value);
    filterFood();
  };

  useEffect(() => {
    setFilterFoodItems(foodItems);
  }, [foodItems]);

  useEffect(() => {
    if (search.length === 0) {
      setFilterFoodItems(foodItems);
    }
  }, [search]);

  return (
    <div className="flex flex-col max-h-screen">
      <AdminHeader pageTitle={"Menu"} />
      <div className="w-full px-4 py-4 flex-1 overflow-auto cartScrollbar">
        {/* Input */}
        <div className="w-full flex items-center bg-white px-6 py-4 rounded-lg ">
          <input
            type="text"
            placeholder="Search Food"
            className="w-full outline-none"
            onChange={(e) => searchFood(e)}
          />
          <FaSearch className="text-orange-700" />
        </div>
        {/* Food Item Section */}
        <div className="flex items-center justify-center py-4 flex-wrap gap-4 mt-5">
          {filterFoodItems.map((item) => (
            <FoodItem key={item._id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminMenu;
