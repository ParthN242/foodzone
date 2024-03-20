import React, { useState } from "react";
import CreditCard from "../../img/visa.png";
import { BiLock } from "react-icons/bi";
import { BsShieldLock } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Redux/Cart/cartSlice";
import { ImSpinner3 } from "react-icons/im";
import { toast } from "react-toastify";

const CheckoutBody = ({ setCheckoutOpen }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const subTotal = cartItems.reduce((t, i) => {
    const total = i.product.price * i.qty + t;
    return total;
  }, 0);

  const compeletPayment = () => {
    setLoading(true);
    setTimeout(async () => {
      await dispatch(clearCart());
      setLoading(false);
      setCheckoutOpen(false);
      toast.success("Order completed successfuly with payment", {
        autoClose: 4000,
        position: "top-center",
      });
    }, 3000);
  };
  return (
    <div className="w-full h-full rounded-t-[2rem] bg-cartBg flex flex-col px-2 max-md:px-1">
      {/* Img */}
      <div className="mx-auto my-6 bg-white rounded-full px-6 py-2">
        <img src={CreditCard} alt="" className="h-8" />
      </div>
      {/* Form */}
      <form className="flex flex-col gap-2">
        <div className="flex flex-col">
          <label
            htmlFor="card_name"
            className="text-white font-semibold text-sm py-1"
          >
            Name on Card
          </label>
          <input
            type="text"
            name="card_name"
            id="card_name"
            placeholder="Enter your name"
            className="bg-transparent border-2 border-gray-500 px-3 py-2 rounded-lg text-orange-500 focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="card_name"
            className="text-white font-semibold text-sm py-1"
          >
            Card Number
          </label>
          <input
            type="text"
            name="card_number"
            id="card_number"
            placeholder="Enter your number"
            className="bg-transparent border-2 border-gray-500 px-3 py-2 rounded-lg text-orange-500 focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="flex gap-1">
          <div className="flex flex-col min-w-[50%]">
            <label
              htmlFor="card_name"
              className="text-white font-semibold text-sm py-1"
            >
              Expire Date
            </label>
            <input
              type="text"
              name="exp_date"
              id="exp_date"
              placeholder="MM/YY"
              className="bg-transparent border-2 border-gray-500 px-3 py-2 rounded-lg text-orange-500 focus:outline-none focus:border-orange-500 w-full"
            />
          </div>
          <div className="flex flex-col min-w-[50%]">
            <label
              htmlFor="card_name"
              className="text-white font-semibold text-sm py-1"
            >
              CVV
            </label>
            <input
              type="text"
              name="cvv"
              id="cvv"
              placeholder="CVV"
              className="bg-transparent border-2 border-gray-500 px-3 py-2 rounded-lg text-orange-500 focus:outline-none focus:border-orange-500 w-full"
            />
          </div>
        </div>
        <p className="text-center text-gray-300 my-5">
          Amount Due:{" "}
          <span className="font-semibold text-white"> ₹{subTotal}</span>
        </p>
        <button
          type="button"
          className="text-white text-lg bg-gradient-to-tr from-orange-400 to-orange-600 p-2 rounded-full flex gap-4 items-center justify-center"
          onClick={compeletPayment}
        >
          {loading ? (
            <ImSpinner3 className="animate animate-spin" />
          ) : (
            <>
              <BiLock />
              PAY NOW
            </>
          )}
        </button>
      </form>
      <div className="w-full bg-cartItem rounded-t-[2rem] h-full flex items-center justify-center gap-3 mt-4">
        <BsShieldLock className="text-xl text-orange-600" />
        <p className="text-md text-white">
          Secured by{" "}
          <span className="text-orange-500 font-semibold">BENSTACK</span>
        </p>
      </div>
    </div>
  );
};

export default CheckoutBody;
