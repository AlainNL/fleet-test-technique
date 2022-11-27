import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/index";

const App = () => {
  return (

  <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
  </Router>
  );
}

export default App;
