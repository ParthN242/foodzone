import React from "react";
import {
  MdLogin,
  MdOutlineKeyboardBackspace,
  MdShoppingBasket,
} from "react-icons/md";
import { BiRefresh } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { clearCart } from "../../Redux/Cart/cartSlice";

const CartHeader = ({ setShowCart }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full flex items-center justify-between px-4 py-4">
      <MdOutlineKeyboardBackspace
        className="text-textColor text-2xl cursor-pointer"
        onClick={() => setShowCart(false)}
      />
      <div className="flex items-center gap-2">
        <p className="text-headingColor">Cart</p>
        <MdShoppingBasket className="text-xl cursor-pointer text-cartNumBg" />
      </div>
      <button
        onClick={() => dispatch(clearCart())}
        className="flex items-center gap-2"
      >
        <p className="text-textColor">clear</p>
        <BiRefresh className="text-cartNumBg" />
      </button>
    </div>
  );
};

export default CartHeader;
