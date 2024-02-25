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
        {/* Displays Logo & Title if screen width is LG or above */}
        <div className="row mt-xxl-5 mt-xl-10 mt-20 h-auto d-lg-block d-none">
          <div className="col-12 h-100">
            <img src="/logo_2.2.png" alt="" />
          </div>
        </div>

        {/* Displays Logo if screen width is MD or below */}
        <div className="row mt-10 h-30 d-lg-none d-block">
          <div className="col-12 h-100">
            <img src="/icon.png" alt="" />
          </div>
        </div>

        {/* Displays Title if screen width is MD or below */}
        <div className="row mt-sm-2 mt-1 h-30 d-lg-none d-block">
          <div className="col-12 h-100">
            <img src="/logo_2.4.png" alt="" />
          </div>
        </div>

        <div className="row mt-sm-2 mt-1">
          <div className="col-12 d-flex justify-content-center align-items-center">
            <div className="fs-xxl-7 fs-xl-6 fs-lg-5 fs-sm-4 fs-2 title-font text-light">
              Where each Snack leaves an Impact
            </div>
          </div>
        </div>

        <div className="row mt-lg-2 mt-3 mx-auto w-100">
          <div className="col-12 d-flex justify-content-evenly align-items-center">
            <CreateHomeButton btnColor="btn-primary">
              <i className="fas fa-phone-alt"></i>
              <div className="ms-sm-2 ms-1 d-inline-block">Eat with us</div>
            </CreateHomeButton>
            <CreateHomeButton btnColor="btn-secondary">
              <i className="fas fa-phone-alt"></i>
              <div className="ms-sm-2 ms-1 d-inline-block">Work with us</div>
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
      className={`btn ${btnColor} d-flex align-items-center fs-xl-3 fs-md-2 fs-1 text-light`}
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


         
        <div className="row mt-3 h-30 d-lg-none d-block">
        <div className="col-12 p-0 h-100">
          <img src="/icon.png" alt="" />
        </div>
      </div>

      <div className="row mt-lg-0 mt-3 h-lg-50 h-30">
        
        <div className="col-4 p-0 h-100 d-lg-block d-none">
          <img src="/icon.png" alt="" />
        </div>
        
        <div className="col-lg-8 col-md-12 p-0 h-100">
          <img src="/logo_2.4.png" alt="" />
        </div>
      </div>   
*/
