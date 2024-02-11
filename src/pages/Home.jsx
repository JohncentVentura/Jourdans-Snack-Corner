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
        style={{ padding: "0 0 0 0", height: "100vh" }}
        imgSrcCover={"/home_bg.jpg"}
      >
        <div className="row h-100">
          <div className="col-xxl-8 col-md-9 col-sm-10 col-11 d-flex flex-column justify-content-center">
            <div className="fs-7 ff-bubblegum-sans text-dark">
              Where each Snack leaves an Impact
            </div>
            <div className="mt-2 fs-4 text-dark">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ab
              rerum distinctio eius facilis dolorum eaque esse autem, beatae
              aliquam? Doloribus illum reprehenderit deleniti maxime natus vero
              distinctio blanditiis? Aut, maiores alias. Molestiae, quisquam!
              Laudantium, tempore vel impedit assumenda vitae in accusamus quasi
              inventore cum magni repudiandae sint. Harum, dolor!
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
          <div className="col-xxl-4 col-md-3 col-sm-2 col-1"></div>
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
