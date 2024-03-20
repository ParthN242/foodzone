import React from "react";
import { motion } from "framer-motion";
import { FaUserCog } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { signOutUserAsync } from "../../Redux/Auth/authApi";
import { getUserDetailAsync } from "../../Redux/User/UserDetailSlice";
import { Link } from "react-router-dom";

const DropDown = ({ user }) => {
  const dispatch = useDispatch();

  const signoutHandler = async () => {
    await dispatch(signOutUserAsync());
    await dispatch(getUserDetailAsync());
  };
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      className="hidden group-hover:flex flex-col gap-2 bg-gray-50 w-48 absolute right-10 top-16 max-md:right-0 rounded-lg cursor-pointer"
    >
      <div className="flex items-center justify-center gap-2  p-1 text-textColor">
        <p>{user.email}</p>
      </div>
      {user.role === "admin" && (
        <Link
          to="/admin/dashboard"
          className="flex items-center justify-center gap-2 hover:bg-slate-100 p-2 text-textColor"
        >
          <p>Administrator</p>
          <RiAdminLine />
        </Link>
      )}
      <Link
        to="/profile"
        className="flex items-center justify-center gap-2 hover:bg-slate-100 p-2 text-textColor"
      >
        <p>Profile</p>
        <FaUserCog />
      </Link>
      <div
        className="flex items-center justify-center gap-2 hover:bg-slate-100 p-2 text-textColor"
        onClick={signoutHandler}
      >
        <p>Logout</p>
        <MdOutlineLogout />
      </div>
    </motion.div>
  );
};

export default DropDown;
