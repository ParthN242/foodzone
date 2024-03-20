import React from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import {
  decrementCartItem,
  deleteToCart,
  incrementCartItem,
} from "../../Redux/Cart/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();
  const cartData = data.product;
  return (
    <div className="flex items-center justify-between gap-2 bg-cartItem rounded-lg p-1 px-2 cursor-pointer">
      <div className="flex items-center gap-2 flex-1">
        <img
          src={cartData.image}
          alt=""
          className="w-20 h-20 max-w-[60px] rounded object-contain"
        />
        <div className="text-white flex flex-col gap-1">
          <p className="text-sm">{cartData.title}</p>
          <p className="text-sm">
            <span className="text-cartNumBg">₹</span> {cartData.price}
          </p>
        </div>
      </div>
      <div className="text-white flex gap-1 items-center w-[30%]">
        <button disabled={data.qty === 1}>
          <BiMinus onClick={() => dispatch(decrementCartItem(cartData._id))} />
        </button>
        <p className="bg-cartBg w-6 rounded text-center ">{data.qty}</p>
        <button>
          <BiPlus onClick={() => dispatch(incrementCartItem(cartData._id))} />
        </button>
      </div>
      <div
        className="bg-cartNumBg rounded-lg p-1"
        onClick={() => dispatch(deleteToCart(cartData._id))}
      >
        <MdDelete className="text-white" />
      </div>
    </div>
  );
};

export default CartItem;
