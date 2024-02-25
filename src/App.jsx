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
      <Footer />
    </>
  );
}

const Footer = () => {
  <>
    <footer>
      <div>
        <a href="https://www.freepik.com/free-photo/view-assortment-with-delicious-food-copy-space_5618651.htm#query=fast%20food%20background&position=25&from_view=search&track=ais&uuid=98769e85-003f-488c-a0e5-1b24f15700f3">
          Freepik
        </a>
        <a href="https://www.freepik.com/free-vector/realistic-tomato-juice-splash-composition-with-slices-whole-fruits-tomato-with-liquid-juice-splashes_6871547.htm#fromView=search&page=1&position=9&uuid=c624fb6a-121c-45ea-8c40-fd53a41a52d1">
          Image by macrovector on Freepik
        </a>
        <a href="https://lordicon.com/">Icons by Lordicon.com</a>
      </div>
    </footer>
  </>;
};

export default App;

/*
src="https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
*/
