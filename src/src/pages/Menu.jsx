import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { UtilPaths } from "../Utilities";

const Menu = () => {
  return (
    <>
      <div
        className="container-fluid position-relative px-0 vh-100 overflow-hidden"
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <div
          className="row justify-content-center g-4"
          style={{ marginTop: "0.5rem" }}
        >
          <div className="col-md-2 col-1"></div>
          <div className="col-md-8 col-10">
            <form action="">
              <label
                htmlFor="input-group-text"
                className="form-label h2 d-block text-center my-md-5 my-3"
              >
                Do not know what to eat, search it here.
              </label>
              <div className="input-group my-md-5 my-3">
                <div className="input-group-text">Enter Food:</div>
                <input
                  type="text"
                  placeholder="Chicken, Burger, Soda, etc..."
                  id="input-group-text"
                  className="form-control"
                />
                <button className="btn btn-danger">Clear</button>
                <button className="btn btn-success">Search</button>
              </div>
            </form>
          </div>
          <div className="col-md-2 col-1"></div>
        </div>

        <div
          className="row justify-content-center g-4"
          style={{ marginTop: "0.5rem" }}
        >
          <div className="col-md-2 col-5">
            <FoodLink
              to={UtilPaths.menuMeals}
              imgSrc="./meals.png"
              text="Meals"
            ></FoodLink>
          </div>
          <div className="col-md-2 col-5">
            <FoodLink
              to={UtilPaths.menuSnacks}
              imgSrc="./snacks.png"
              text="Snacks"
            ></FoodLink>
          </div>
          <div className="col-md-2 col-5">
            <FoodLink
              to={UtilPaths.menuBeverages}
              imgSrc="./beverages.png"
              text="Beverages"
            ></FoodLink>
          </div>
          <div className="col-md-2 col-5">
            <FoodLink
              to={UtilPaths.menuBundles}
              imgSrc="./bundles.png"
              text="Bundles"
            ></FoodLink>
          </div>
        </div>
      </div>
    </>
  );
};

function FoodLink({ to, imgSrc, text }) {
  const resolvedPath = useResolvedPath(to);
  //useMatch() parameters requires an object that contains the path we want to access, and an optional boolean that tells the entire path must match
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active nav-item" : "nav-item"}>
      <Link to={to} className="nav-link">
        <div className="position-relative">
          <img src={imgSrc} className="w-100 h-100" />
          <div className="position-absolute top-0 w-100 h-100 d-flex justify-content-center align-items-end h3 text-light">
            {text}
          </div>
        </div>
      </Link>
    </li>
  );
}

export default Menu;

/*
<div className="card rounded-6 food-card">
          <img
            src={imgSrc}
            className="card-img-top w-100 h-100 object-fit-cover"
          />
          <div className="card-body card-img-overlay text-light h3 d-flex flex-column justify-content-end align-items-center">
            {text}
          </div>
        </div>
*/
