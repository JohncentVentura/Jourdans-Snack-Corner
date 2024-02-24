import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { UtilPaths, UtilCreateSection } from "../Utilities";
//Lordicon imports
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
defineElement(lottie.loadAnimation); // define "lord-icon" custom element with default properties

const Home = () => {
  return (
    <>
      <UtilCreateSection
        style={{ height: "100vh" }}
        imgSrcCover={
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      >
        {/* Displays Logo when screen is Medium and below */}
        <div className="row mt-3 h-sm-30 h-20 d-lg-none d-block">
          <div className="col-12 p-0 h-100">
            <img src="/icon.png" alt="" />
          </div>
        </div>
        
        {/* Responsive Display of Title and Logo */}
        <div className="row mt-lg-4 mt-3 h-lg-50 h-sm-30 h-20"> 
          {/* Displays Logo when screen is Large and above */}
          <div className="col-4 p-0 h-100 d-lg-block d-none">
            <img src="/icon.png" alt="" />
          </div>
          {/* Responsive Title */}
          <div className="col-lg-8 col-md-12 p-0 h-100">
            <img src="/logo_2.4.png" alt="" />
          </div>
        </div>

        <div className="row mt-md-1 mt-0 h-10">
          <div className="col-12 p-0 d-flex justify-content-center align-items-center">
            <div className="fs-lg-7 fs-md-6 fs-sm-5 fs-3 title-font text-light">
              Where each Snack leaves an Impact
            </div>  
          </div>
        </div>

        <div className="row mt-xl-2 mt-lg-1 mt-0 mx-auto w-100 h-10">
          <div className="col-12 p-0 d-flex justify-content-evenly align-items-center">
            <CreateHomeButton btnColor="btn-primary">
              <i className="fas fa-phone-alt"></i>
              <div className="ms-1 d-inline-block">Eat with us</div>
            </CreateHomeButton>
            <CreateHomeButton btnColor="btn-secondary">
              <i className="fas fa-phone-alt"></i>
              <div className="ms-1 d-inline-block">Work with us</div>
            </CreateHomeButton>
          </div>
        </div>
      </UtilCreateSection>

      <UtilCreateSection
        style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
        imgSrcFill={
          "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
        }
      >
        <div className="display-3">Welcome to Jourdans Snack Corner</div>
      </UtilCreateSection>
    </>
  );
};

const CreateHomeButton = ({ btnColor, children }) => {
  return (
    <button
      type="button"
      className={`btn ${btnColor} d-flex align-items-center fs-lg-4 fs-sm-3 fs-2 text-light`}
    >
      {children}
    </button>
  );
};

export default Home;

/*
<MenuLink to={UtilPaths.aboutUs}>
              <lord-icon
                src="https://cdn.lordicon.com/fmclztgv.json"
                trigger="hover"
                style={{ width: "100%", height: "100%" }}
              ></lord-icon>
              <div>Meals</div>
            </MenuLink>
*/
