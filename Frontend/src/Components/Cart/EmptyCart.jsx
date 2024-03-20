import React from "react";
import EmptyCartImg from "../../img/emptyCart.svg";

const EmptyCart = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10 px-6">
      <img src={EmptyCartImg} alt="" />
      <p>Cart is empty</p>
    </div>
  );
};

export default EmptyCart;
