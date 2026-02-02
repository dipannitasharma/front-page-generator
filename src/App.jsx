import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Merge from "./pages/Merge";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-[#121212] min-h-screen flex flex-col">

      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/merge" element={<Merge />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
};

export default App;
