import React, { useLayoutEffect, useRef } from "react";
import FoodItem from "../FoodItem/FoodItem";
import NotFound from "../NotFound/NotFound";
import Loader from "../Loader/Loader";

const Container = ({ foodItems, row, scrollOffset }) => {
  const containerRef = useRef(null);
  useLayoutEffect(() => {
    if (null !== containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
    }
  }, [scrollOffset]);
  return (
    <div
      ref={containerRef}
      className={`my-5 bg-containerbg flex items-center w-full gap-4 px-2 py-10 ${
        !row
          ? "overflow-x-scroll scroll-smooth scrollbar-hidden min-h-[200px]"
          : "flex-wrap justify-center gap-y-20"
      }`}
    >
      {!foodItems &&
        (!row ? (
          <Loader progress={"Fetching Food Items..."} />
        ) : (
          <NotFound text={"Fetching Food Items..."} />
        ))}
      {foodItems &&
        foodItems.map((item, index) => <FoodItem data={item} key={index} />)}

      {foodItems && foodItems.length <= 0 && (
        <NotFound text={"No Food Items Available..."} />
      )}
    </div>
  );
};

export default Container;
