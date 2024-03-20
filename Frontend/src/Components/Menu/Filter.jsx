import React from "react";
import categories from "../../Utils/categories";
import { BiRestaurant } from "react-icons/bi";

const Filter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex gap-8 max-lg:gap-4 items-center my-5 flex-wrap justify-center">
      <Button
        data={{ id: 8, name: "Menu", urlParam: "menu", icon: <BiRestaurant /> }}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {categories.map((item) => (
        <Button
          data={item}
          key={item.id}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </div>
  );
};

const Button = ({ data, selectedCategory, setSelectedCategory }) => {
  return (
    <div
      className={`group   ${
        selectedCategory === data.urlParam
          ? "bg-cartNumBg hover:bg-white"
          : "bg-white hover:bg-cartNumBg"
      } flex flex-col items-center justify-center gap-3 drop-shadow-xl py-3 px-6 rounded-lg cursor-pointer w-[6rem] h-28 transition-all duration-200`}
      onClick={() => setSelectedCategory(data.urlParam)}
    >
      <div
        className={`w-10 h-10 rounded-full ${
          selectedCategory === data.urlParam
            ? "group-hover:bg-cartNumBg bg-white"
            : "bg-cartNumBg group-hover:bg-white "
        }  text-white flex items-center justify-center`}
      >
        <span
          className={`text-lg ${
            selectedCategory === data.urlParam
              ? "group-hover:text-btnOverlay text-textColor"
              : "text-btnOverlay group-hover:text-textColor "
          } `}
        >
          {data.icon}
        </span>
      </div>
      <p
        className={`whitespace-nowrap ${
          selectedCategory === data.urlParam
            ? "group-hover:text-textColor text-white"
            : "text-textColor group-hover:text-white"
        } `}
      >
        {data.name}
      </p>
    </div>
  );
};
export default Filter;
