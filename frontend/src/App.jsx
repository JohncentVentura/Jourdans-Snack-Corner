/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

//Lordicon imports
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
defineElement(lottie.loadAnimation); // define "lord-icon" custom element with default properties

import { KeyPaths, PagePaths } from "./Paths";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./home/Home";
import About from "./home/About";
import Menu from "./home/Menu";
import Contact from "./home/Contact";
import Login from "./home/Login";
import Products from "./products/Products";
import CreateProduct from "./products/CreateProduct";
import ReadProduct from "./products/ReadProduct";
import UpdateProduct from "./products/UpdateProduct";
import DeleteProduct from "./products/DeleteProduct";

import axios from "axios";
import { TitleDiv } from "./components/Components";

function App() {
  //PrintBreakPoint();
  ScrollToTop(); //Scroll to top when navigating pages
  const location = useLocation();
  const isAdminLoginLocal = localStorage.getItem(KeyPaths.isAdminLogin);
  const [isServerOnline, setIsServerOnline] = useState(false);
  const [isAdminLogin, setIsAdminLogin] = useState();

  //Checks if server is online or offline
  useEffect(() => {
    axios
      .get(`${PagePaths.port}`)
      .then((res) => {
        setIsServerOnline(true);
        console.log("isServerOnline:", isServerOnline);
      })
      .catch((error) => {
        setIsServerOnline(false);
        console.log("isServerOnline:", isServerOnline);
      });
  });

  //Handles variables when logging in
  useEffect(() => {
    if (localStorage.getItem(KeyPaths.isAdminLogin) === "true") {
      setIsAdminLogin(true);
    } else if (
      localStorage.getItem(KeyPaths.isAdminLogin) === "false" ||
      localStorage.getItem(KeyPaths.isCustomerLogin) === "false"
    ) {
      setIsAdminLogin(false);
    }
  }, [isAdminLoginLocal]);

  return (
    <>
      {!isServerOnline ? (
        <div
          className="bg-primary d-flex justify-content-center align-items-center"
          style={{ width: "100vw", height: "100vh" }}
        >
          <TitleDiv className="text-dark">LOADING...</TitleDiv>
        </div>
      ) : (
        <>
          <Navbar isAdminLogin={isAdminLogin} />
          <Routes location={location} key={location.pathname}>
            <Route path={PagePaths.home} element={<Home />}></Route>
            <Route path={PagePaths.about} element={<About />}></Route>
            <Route path={PagePaths.menu} element={<Menu />}></Route>
            <Route path={PagePaths.contact} element={<Contact />}></Route>
            <Route path={PagePaths.login} element={<Login />}></Route>

            <Route path={PagePaths.products} element={<Products />}></Route>
            <Route
              path={PagePaths.createProduct}
              element={<CreateProduct />}
            ></Route>
            <Route
              path={`${PagePaths.readProduct}/:id`}
              element={<ReadProduct />}
            ></Route>
            <Route
              path={`${PagePaths.updateProduct}/:id`}
              element={<UpdateProduct />}
            ></Route>
            <Route
              path={`${PagePaths.deleteProduct}/:id`}
              element={<DeleteProduct />}
            ></Route>
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
};

export const PrintBreakPoint = () => {
  useEffect(() => {
    printBreakpoint();
    window.addEventListener("resize", () => printBreakpoint());

    function printBreakpoint() {
      if (window.innerWidth >= 1400) {
        console.log("xxl desktop"); //Desktop
      } else if (window.innerWidth >= 1200) {
        console.log("xl laptop"); //Laptop
      } else if (window.innerWidth >= 992) {
        console.log("lg h-tablet"); //Horizontal Tablet
      } else if (window.innerWidth >= 768) {
        console.log("md v-tablet"); //Vertical Tablet
      } else if (window.innerWidth >= 576) {
        console.log("sm h-phone"); //Horizontal Phone
      } else {
        console.log("df v-phone"); //Vertical Phone
      }
    }
  });
};

export default App;
