import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import { PagePaths } from "./Paths";
import { Footer } from "./components/Components";
import Navbar from "./components/Navbar";
import Home from "./home/Home";
import About from "./home/About";
import Menu from "./home/Menu";
import Contact from "./home/Contact";
import Login from "./home/Login";
import Dashboard from "./components/Dashboard";
import Products from "./products/Products";
import CreateProduct from "./products/CreateProduct";
import ReadProduct from "./products/ReadProduct";
import UpdateProduct from "./products/UpdateProduct";
import DeleteProduct from "./products/DeleteProduct";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

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

  return (
    <>
      <Navbar isLogin={isLogin} />
      <Routes location={location} key={location.pathname}>
        <Route path={PagePaths.home} element={<Home />}></Route>
        <Route path={PagePaths.about} element={<About />}></Route>
        <Route path={PagePaths.menu} element={<Menu />}></Route>
        <Route path={PagePaths.contact} element={<Contact />}></Route>
        <Route path={PagePaths.login} element={<Login />}></Route>

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

export default App;
