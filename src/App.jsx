import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import Snacks from "./pages/Snacks";
import Beverages from "./pages/Beverages";
import Bundles from "./pages/Bundles";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/beverages" element={<Beverages />} />
        <Route path="/bundles" element={<Bundles />} />
      </Routes>

      <footer>Footer</footer>
    </>
  );
}

export default App;
