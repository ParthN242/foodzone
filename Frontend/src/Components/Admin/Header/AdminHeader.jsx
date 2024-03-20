import React from "react";
import { FaShopify } from "react-icons/fa";
import { Link } from "react-router-dom";
const AdminHeader = ({ pageTitle }) => {
  return (
    <Link
      to="/"
      className="flex items-center justify-between px-6 py-6 pb-4 border-b-2 border-red-200 w-full"
    >
      <h1 className="text-textColor text-xl font-semibold">{pageTitle}</h1>
      <div className="flex items-center gap-2 text-red-500">
        <FaShopify className="w-6 h-6" />
        <p className="text-xl font-semibold">store</p>
      </div>
    </Link>
  );
};

export default AdminHeader;
