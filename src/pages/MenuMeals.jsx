import React from "react";
import {  } from "../Utilities";

const MenuMeals = () => {
  return (
    <>
      <div
        className="container-fluid position-relative px-0 vh-100 overflow-hidden"
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        
        <div className="row g-4 p-3">
          <div className="col-2 vh-100 bg-light bg-opacity-75 overflow-y-scroll"></div>

          <div className="col-10 vh-100 overflow-y-scroll">
            <div className="row my-3">
              <div className="col-4">
                <div className="h2">Rice Meal</div>
              </div>
              <div className="col-8">
                <form action="" className="d-flex" role="search">
                  <input
                    type="search"
                    className="form-control ms-3 me-3"
                    placeholder="🔍"
                    aria-label="Search"
                  />
                  <button type="submit" className="btn btn-outline-light">
                    Search
                  </button>
                </form>
              </div>
            </div>

            <MealCard
              header={"Food Name"}
              body={"Food Details"}
              footer={"Close"}
            />
            <MealCard
              header={"Food Name"}
              body={"Food Details"}
              footer={"Close"}
            />
            <MealCard
              header={"Food Name"}
              body={"Food Details"}
              footer={"Close"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const MealCard = ({ header, body, footer }) => {
  return (
    <>
      <div className="card" style={{ width: "300px" }}>
        <img src="/Meals.png" alt="Meals.png" className="card-img-top" />
        <h2 className="card-header">{header}</h2>
        <div className="card-body">
          <div className="card-text">{body}</div>
        </div>
        <div className="card-footer">{footer}</div>
      </div>
    </>
  );
};

export default MenuMeals;
