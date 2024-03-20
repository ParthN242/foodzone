import React from "react";
import Left from "./Left";
import Right from "./Right";

const Showcase = () => {
  return (
    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-2 w-full">
      <Left />
      <Right />
    </div>
  );
};

export default Showcase;
