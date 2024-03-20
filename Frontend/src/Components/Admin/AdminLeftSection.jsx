import React, { useState } from "react";
import Logo from "../../img/chef1.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { MdAddModerator, MdOutlineRestaurantMenu } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineUpdate } from "react-icons/md";
import { NavLink } from "react-router-dom";

const AdminLeftSection = () => {
  return (
    <aside className="min-w-[20%] min-h-screen bg-orange-600 px-4 py-3">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="flex items-center justify-center gap-2 cursor-pointer"
      >
        <img src={Logo} alt="cheff logo" className="w-12 h-12" />
        <Link to={"/"} className="text-white text-xl font-bold">
          FoodZone
        </Link>
      </motion.div>
      <ul className="mt-6 flex flex-col gap-2">
        <NavItem
          link={"/admin/dashboard"}
          icon={<AiFillDashboard />}
          title={"Dashboard"}
        />
        <NavItem
          link={"/admin/addfood"}
          icon={<MdAddModerator />}
          title={"Add Food"}
        />
        <NavItem
          link={"/admin/updatefood"}
          icon={<MdOutlineUpdate />}
          title={"Update Food"}
        />
        <NavItem
          link={"/admin/menu"}
          icon={<MdOutlineRestaurantMenu />}
          title={"Menu"}
        />
        <NavItem link={"/admin/orders"} icon={<CiHeart />} title={"Orders"} />
        <NavItem link={"/admin/users"} icon={<FiUsers />} title={"Users"} />
        <NavItem
          link={"/admin/setting"}
          icon={<IoSettingsOutline />}
          title={"Settings"}
        />
      </ul>
    </aside>
  );
};

const NavItem = ({ link, icon, title }) => {
  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) =>
          `${
            isActive ? "bg-orange-700 " : ""
          } rounded-lg hover:bg-orange-700 px-4 py-4 flex items-center gap-3`
        }
      >
        <p className="text-white font-bold text-xl">{icon}</p>
        <p className="text-lg font-semibold text-white">{title}</p>
      </NavLink>
    </li>
  );
};

export default AdminLeftSection;
