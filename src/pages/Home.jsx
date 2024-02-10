import React from "react";
import { UtilSetContainer } from "../Utilities";

const Home = () => {
  return (
    <>
      <UtilSetContainer
        style={{ paddingTop: "7rem", paddingBottom: "0rem", height: "100vh" }}
        bgImgSrc={
          "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
        }
      >
        <img src="/FoodBG.png" className="position-absolute top-0 w-100 h-100 "/>

        <div className="row mt-4">
          <div className="col-md-1 col-1"></div>
          <div className="col-md-7 col-10 d-flex flex-column justify-content-center align-items-center">
            <div className="display-1 text-dark">
              Where each Snack leaves an Impact
            </div>  
            <div className="fs-4 d-flex flex-column justify-content-center align-items-center">
              Serving a variety of food and beverages, from rice meals to
              snacks, from beverages to resells, all of this in just one snack corner.
            </div>
          </div>
          <div className="col-md-4 col-1"></div>
        </div>
      </UtilSetContainer>
      <UtilSetContainer
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
        bgImgSrc={
          "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
        }
      >
        <div className="display-1">UHHHH</div>
      </UtilSetContainer>
    </>
  );
};

export default Home;
