import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./navigation/NavBar";
import MainPage from "./MainPage";
import FashionPage from "./fasion/FashionPage";
import AccessoriesPage from "./accessories/AccessoriesPage";
import DigitalPage from "./digital/DigitalPage";
import Cart from "../cart/Cart";
function App() {
  return (
    <>
      {/*네비게이션 바 */}
      <Router>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<MainPage />}></Route>
          <Route path={"fashion"} element={<FashionPage />}></Route>
          <Route path={"accessories"} element={<AccessoriesPage />}></Route>
          <Route path={"digital"} element={<DigitalPage />}></Route>
          <Route path={"cart"} element={<Cart />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
