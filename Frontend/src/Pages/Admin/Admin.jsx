import React, { useEffect, useState } from "react";
import AdminRightSection from "../../Components/Admin/AdminRightSection";
import AdminLeftSection from "../../Components/Admin/AdminLeftSection";
import { useDispatch } from "react-redux";
import { getAllUserAsync } from "../../Redux/User/allUserSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("dashboard");
  useEffect(() => {
    dispatch(getAllUserAsync());
  }, []);

  return (
    <main className="flex gap-2 min-h-screen w-screen">
      <AdminLeftSection />
      <AdminRightSection />
    </main>
  );
};

export default Admin;
