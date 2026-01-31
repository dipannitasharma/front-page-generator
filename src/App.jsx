import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Merge from "./pages/Merge";

const App = () => {
  return (
    <div className="bg-[#121212] min-h-screen">

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merge" element={<Merge />} />
      </Routes>

    </div>
  );
};

export default App;
