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
import Register from "./accounts/Register";
import Cart from "./accounts/Cart";
import Dashboard from "./components/Dashboard";
import Products from "./products/Products";
import CreateProduct from "./products/CreateProduct";
import ReadProduct from "./products/ReadProduct";
import UpdateProduct from "./products/UpdateProduct";
import DeleteProduct from "./products/DeleteProduct";

function App() {
  //PrintBreakPoint();
  ScrollToTop(); //Scroll to top when navigating pages
  const location = useLocation();
  const isCustomerLoginLocal = localStorage.getItem(KeyPaths.isCustomerLogin);
  const isAdminLoginLocal = localStorage.getItem(KeyPaths.isAdminLogin);
  const [isAdminLogin, setIsAdminLogin] = useState();
  const [isCustomerLogin, setIsCustomerLogin] = useState();
  const [loginID, setLoginID] = useState();

  //Handles states when customer login
  useEffect(() => {
    if (localStorage.getItem(KeyPaths.isAdminLogin) === "true") {
      setLoginID(localStorage.getItem(KeyPaths.loginID));
      setIsAdminLogin(true);
    } else if (localStorage.getItem(KeyPaths.isCustomerLogin) === "true") {
      setLoginID(localStorage.getItem(KeyPaths.loginID));
      setIsCustomerLogin(true);
    } else if (
      localStorage.getItem(KeyPaths.isAdminLogin) === "false" ||
      localStorage.getItem(KeyPaths.isCustomerLogin) === "false"
    ) {
      setIsAdminLogin(false);
      setIsCustomerLogin(false);
      setLoginID("");
    }
  }, [isCustomerLoginLocal, isAdminLoginLocal, loginID]);

  return (
    <>
      <Navbar
        isCustomerLogin={isCustomerLogin}
        isAdminLogin={isAdminLogin}
        loginID={loginID}
      />
      <Routes location={location} key={location.pathname}>
        <Route path={PagePaths.home} element={<Home />}></Route>
        <Route path={PagePaths.about} element={<About />}></Route>
        <Route
          path={PagePaths.menu}
          element={<Menu loginID={loginID} />}
        ></Route>
        <Route path={PagePaths.contact} element={<Contact />}></Route>
        <Route path={PagePaths.login} element={<Login />}></Route>

        <Route path={PagePaths.createAccount} element={<Register />}></Route>
        <Route path={`${PagePaths.cart}`} element={<Cart />}></Route>
        <Route path={`${PagePaths.cart}/:id`} element={<Cart />}></Route>

        <Route path={PagePaths.dashboard} element={<Dashboard />}></Route>
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
