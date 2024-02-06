import React from "react";

const Meals = () => {
  return (
    <>
      <div className="container-fluid">
        <img
          src="https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="BG"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -10,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div className="row g-3">
          <div className="col">
            <MealCard
              header={"Food Name"}
              body={"Food Details"}
              footer={"Close"}
            />
          </div>
          <div className="col">
            <MealCard
              header={"Food Name"}
              body={"Food Details"}
              footer={"Close"}
            />
          </div>
          <div className="col">
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

export default Meals;
