import React from "react";
import Showcase from "../../Components/Showcase/Showcase";
import FruitSection from "../../Components/Sections/Fruit/FruitSection";
import Menu from "../../Components/Menu/Menu";

const Home = () => {
  return (
    <div className="px-3 flex flex-col ">
      <Showcase />
      <FruitSection />
      <Menu />
    </div>
  );
};

export default Home;
