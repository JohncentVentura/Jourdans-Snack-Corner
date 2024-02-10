import { React, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import Contacts from "./pages/Contacts";
import MenuMeals from "./pages/MenuMeals";
import MenuSnacks from "./pages/MenuSnacks";
import MenuBeverages from "./pages/MenuBeverages";
import MenuBundles from "./pages/MenuBundles";
import { UtilPaths } from "./Utilities";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={UtilPaths.home} element={<Home />} />
        <Route path={UtilPaths.aboutUs} element={<AboutUs />} />
        <Route path={UtilPaths.menu} element={<Menu />} />
        <Route path={UtilPaths.contacts} element={<Contacts />} />
        <Route path={UtilPaths.menuMeals} element={<MenuMeals />} />
        <Route path={UtilPaths.menuSnacks} element={<MenuSnacks />} />
        <Route path={UtilPaths.menuBeverages} element={<MenuBeverages />} />
        <Route path={UtilPaths.menuBundles} element={<MenuBundles />} />
      </Routes>
    </>
  );
}

const Footer = () => {
  <>
    <footer>
      <div>
      <a href="https://www.freepik.com/free-photo/fast-food-dish-top-view-meat-burger-potato-chips-wedges-take-away-composition-french-fries-hamburger-mayonnaise-ketchup-sauces-yellow-background-menu-receipt-background-top-view_28990348.htm#query=fast%20foods&position=30&from_view=search&track=ais&uuid=c419c7a1-d682-4754-9371-229b111ce5ee">Image by YuliiaKa</a> on Freepik
      </div>
    </footer>
  </>
}

export default App;

/*
src="https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
*/
