import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./navigation/NavBar";
import MainPage from "./main/MainPage";
import FashionPage from "./fasion/FashionPage";
import AccessoriesPage from "./accessories/AccessoriesPage";
import DigitalPage from "./digital/DigitalPage";
import Cart from "./cart/Cart";
import ErrorPage from "./error/ErrorPage";

const App = () => (
  <>
    {/* 네비게이션 바 */}
    <Router>
      <div className="relative w-screan h-screan">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="fashion" element={<FashionPage />} />
          <Route path="accessories" element={<AccessoriesPage />} />
          <Route path="digital" element={<DigitalPage />} />
          <Route path="cart" element={<Cart />} />
          <Route path="error" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  </>
);

export default App;
