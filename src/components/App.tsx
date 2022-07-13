import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./navigation/NavBar";
function App() {
  return (
    <>
      {/*네비게이션 바 */}
      <Router>
        <NavBar />
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
