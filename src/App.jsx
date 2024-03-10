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
import {
  UtilPaths,
  UtilContainerPaddingX,
  UtilCreateSection,
  UtilCreateContainer,
  UtilCreateBgImg,
} from "./Utilities";

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
  return (
    <>
      <footer className="container-fluid position-relative top-0 start-0 px-0 w-100 h-100 bg-secondary overflow-x-hidden">
        <div className="row pb-10">
          <div className="col-12 fs-lg-7 fs-sm-5 fs-3 text-center ff-title">
            Footer
          </div>
          <div className="col-12 text-center">
            4G6V+6JW, Manaoag - Pozzorubio Rd, Pozorrubio, Pangasinan •
            09999999999
          </div>

          <ul
            className={`col-12 mb-0 ${UtilContainerPaddingX} d-flex justify-content-evenly align-items-center`}
          >
            <li>Home</li>
            <li>About us</li>
            <li>Menu</li>
            <li>Contacts</li>
          </ul>

          <div className="col-12 text-center">
            ⓒ Jourdans Snack Corner 2020 • All Rights Reserved • Design by
            Johncent Ventura
          </div>

          <div className="col-12 text-center">
            <a href="https://lordicon.com/" className="text-dark">
              Icons by Lordicon.com
            </a>
          </div>

          <div className="col-12 text-center">
            <a href="https://www.google.com/maps/place/SONIC+PRINT+SHOP/@16.1106293,120.5415025,17z/data=!3m1!4b1!4m6!3m5!1s0x339113441ea5fd3b:0x898d955fde706c87!8m2!3d16.1106242!4d120.5440774!16s%2Fg%2F11stytk36h?entry=ttu"
            className="text-dark">
              Map by Google Maps
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;

/*
src="https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        
*/
