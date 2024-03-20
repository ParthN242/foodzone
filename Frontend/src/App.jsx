import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./Route/ProtectedRoute";
import Admin from "./Pages/Admin/Admin";
import Main from "./Pages/Main/Main";
import { useEffect } from "react";
import { getFoodItemAsync } from "./Redux/Food/Get Food Item/getFoodApi";
import { useDispatch, useSelector } from "react-redux";
import React, { getUserDetailAsync } from "./Redux/User/UserDetailSlice";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL_0;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserDetailAsync());
  }, []);

  useEffect(() => {
    if (user) {
      dispatch(getFoodItemAsync());
    }
  }, [user]);

  return (
    <div className="w-screen min-h-screen bg-primary box-border">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/*" element={<Main />} />
            <Route path="/admin/*" element={<Admin />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
