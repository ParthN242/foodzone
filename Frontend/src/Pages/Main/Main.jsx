import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Cart from "../../Components/Cart/Cart";
import Menu from "../../Components/Menu/Menu";
import Footer from "../../Components/Footer/Footer";
import Services from "../Services/Services";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";

const Main = () => {
  const [showCart, setShowCart] = useState(false);
  return (
    <>
      {showCart && <Cart setShowCart={setShowCart} />}
      <Header setShowCart={setShowCart} />
      <main className="w-full h-full box-border py-6 max-md:py-4 px-8 max-md:px-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default Main;
