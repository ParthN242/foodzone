import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import AddFood from "./AddFood/AddFood";
import UpdateFood from "./UpdateFood/UpdateFood";
import AdminMenu from "./Menu/AdminMenu";
import AdminUser from "./User/AdminUser";
import Orders from "./Orders/Orders";
import Setting from "./Setting/Setting";

const AdminRightSection = () => {
  return (
    <section className="w-full h-full px-2">
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addfood" element={<AddFood />} />
        <Route path="/updatefood" element={<UpdateFood />} />
        <Route path="/menu" element={<AdminMenu />} />
        <Route path="/users" element={<AdminUser />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </section>
  );
};

export default AdminRightSection;
