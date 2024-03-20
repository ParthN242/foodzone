import React from "react";
import AdminHeader from "../Header/AdminHeader";
import DashboardCard from "./DashboardCard";

const Dashboard = () => {
  return (
    <div>
      <AdminHeader pageTitle={"Dashboard"} />
      <div className="px-8 py-4 flex items-center justify-between gap-4 flex-wrap">
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
      </div>
    </div>
  );
};

export default Dashboard;
