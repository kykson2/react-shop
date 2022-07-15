import React from "react";
import MainPageCarousel from "./carousel/MainPageCarousel";
import FashionPage from "../fasion/FashionPage";

const MainPage: React.FC = () => (
  <div className="mainpage-area pt-16">
    <MainPageCarousel />
    <FashionPage />
  </div>
);

export default MainPage;
