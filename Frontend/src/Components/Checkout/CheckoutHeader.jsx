import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsShieldLock } from "react-icons/bs";

const CheckoutHeader = ({ setCheckoutOpen }) => {
  return (
    <div className="w-full flex ic justify-between px-4 py-4">
      <MdOutlineKeyboardBackspace
        className="text-textColor text-2xl cursor-pointer"
        onClick={() => setCheckoutOpen(false)}
      />
      <div className="flex items-center gap-2">
        <p className="text-headingColor">Secured Payment</p>
      </div>
      <div
        onClick={() => dispatch(clearCart())}
        className="flex items-center gap-2"
      >
        <BsShieldLock className="text-xl cursor-pointer text-cartNumBg" />
        <RiSecurePaymentLine className="text-xl cursor-pointer text-cartNumBg" />
      </div>
    </div>
  );
};

export default CheckoutHeader;
