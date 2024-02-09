import React from "react";
import { UtilsBGImage } from "../Utilities";

const Home = () => {
  return (
    <>
      <div
        className="container-fluid position-relative px-0 vh-100 overflow-hidden"
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
      >
        <UtilsBGImage
          src={
            "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
          }
        />
        <div className="row">
          <div className="col-md-1 col-0"></div>
          <div className="col-md-5 col-12 d-flex flex-column justify-content-center align-items-center">
            <img
              src="logo_2.png"
              alt="Jourdan's Snack Corner Logo"
              className="object-fit-contain w-75 h-75"
            />
          </div>
          <div className="col-md-5 col-12 d-flex flex-column justify-content-center align-items-md-start align-items-center">
            <div className="display-1">Business Slogan</div>
            <div className="fs-4">Business Subtitle</div>
          </div>
          <div className="col-md-1 col-0"></div>
        </div>  
      </div>
    </>
  );
};

export default Home;
