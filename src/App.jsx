import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Food from "./pages/Food";
import Contact from "./pages/Contact";
import FoodMeals from "./pages/FoodMeals";
import FoodSnacks from "./pages/FoodSnacks";
import FoodBeverages from "./pages/FoodBeverages";
import FoodBundles from "./pages/FoodBundles";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/food" element={<Food />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/food/meals" element={<FoodMeals />} />
        <Route path="/food/snacks" element={<FoodSnacks />} />
        <Route path="/food/beverages" element={<FoodBeverages />} />
        <Route path="/food/bundles" element={<FoodBundles />} />
      </Routes>
    </>
  );
}

export default App;

/*
src="https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
*/
