import React from "react";
import { useSelector } from "react-redux";
import Loading from "../Components/Loading/Loading";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  let {
    loading = true,
    user,
    success,
    error,
  } = useSelector((state) => state.user);

  return (
    <>
      {success ? (
        <Outlet />
      ) : loading ? (
        <Loading />
      ) : error ? (
        <Navigate to={"/signin"} />
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ProtectedRoute;
