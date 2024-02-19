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
        <div className="row h-100">
          <div className="col-lg-2 col-1"></div>
          <div className="col-lg-8 col-10 d-flex flex-column justify-content-center">
            <img src="/logo_2.png" alt="" className="home-img"/>
            <div className="fs-xl-8 fs-lg-7 fs-6 m-3 ff-bubblegum-sans text-light text-center">
              Where each Snack leaves an Impact
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <button
                  type="button"
                  className="btn btn-primary d-flex align-items-center fs-3"
                >
                  <i className="fas fa-phone-alt"></i>
                  <div className="ms-1 d-inline-block">Call Us Now</div>
                </button>
              </div>
            </div>
          </div>  
          <div className="col-lg-2 col-1"></div>
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

function MenuLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  //useMatch() parameters requires an object that contains the path we want to access, and an optional boolean that tells the entire path must match
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const menuLinkClass =
    "d-flex flex-column justify-content-center align-items-center";

  return (
    <Link
      to={to}
      className={isActive ? `active ${menuLinkClass}` : `${menuLinkClass}`}
      styles={{ width: "2rem", height: "2rem" }}
    >
      {children}
    </Link>
  );
}

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
