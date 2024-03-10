import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import {
  UtilPaths,
  UtilContainerPaddingX,
  UtilCreateSection,
  UtilCreateContainer,
  UtilCreateBgImg,
} from "../Utilities";
//Lordicon imports
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
defineElement(lottie.loadAnimation); // define "lord-icon" custom element with default properties

const bestSellerNames = ["Fried Chicken", "Burger with Fries", "Dumplings"];

const bestSellerImages = ["/meals.png", "/snacks.png", "/bundles.png"];
const bestSellerColors = ["primary", "secondary", "warning", "primary"];
const openHoursDays = ["Sunday - Saturday", "Holidays"];
const openHourTimes = ["10am - 4pm", "Closed"];

const Home = () => {
  return (
    <>
      <UtilCreateSection
        bgImgSrc={
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        style={{ height: "100vh" }}
      >
        {/*Overrided UtilCreateContainer className*/}
        <UtilCreateContainer
          className={`container-fluid ${UtilContainerPaddingX} w-100 h-100 header-container`}
        >
          {/* Displays Logo & Title if screen width is LG or above */}
          <div className="row mt-xxl-7 mt-10 h-auto d-lg-block d-none">
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
              <div className="fs-xxl-7 fs-xl-6 fs-lg-5 fs-sm-4 fs-2 ff-title text-light">
                Where each Snack leaves an Impact
              </div>
            </div>
          </div>

          <div className="row mt-sm-2 mt-1 px-lg-0 px-sm-10 px-0">
            <div className="col-sm-6 col-12 d-flex justify-content-center align-items-center">
              <CreateHomeButton btnColor="btn-primary">
                <i className="fas fa-utensils"></i>
                <div className="ms-sm-2 ms-1 d-inline-block">Eat with us</div>
              </CreateHomeButton>
            </div>
            <div className="col-sm-6 col-12 mt-sm-0 mt-2 d-flex justify-content-center align-items-center">
              <CreateHomeButton btnColor="btn btn-secondary">
                <i className="fas fa-phone-alt"></i>
                <div className="ms-sm-2 ms-1 d-inline-block">Work with us</div>
              </CreateHomeButton>
            </div>
          </div>
        </UtilCreateContainer>
      </UtilCreateSection>

      <UtilCreateSection bgColor={"bg-light"}>
        <UtilCreateContainer>
          <div className="row mt-20">
            <div className="col-12 fs-xl-9 fs-sm-8 fs-7">
              <lord-icon
                src="https://cdn.lordicon.com/pkvlegzp.json"
                trigger="loop"
                colors="primary:#121331,secondary:#121331"
                style={{ width: "100%", height: "100%" }}
              ></lord-icon>
            </div>
            <div className="col-12 fs-xl-7 fs-sm-6 fs-5 ff-title text-dark text-center">
              Featured Menu Items
            </div>
          </div>

          <div className="row justify-content-evenly">
            {bestSellerImages.map((element, index) => (
              <div
                className={`col-xl-3 col-sm-5 col-7 mt-lg-6 mt-3 border border-1 border-${bestSellerColors[index]} rounded-5 px-0 bg-${bestSellerColors[index]}`}
                key={element + index}
              >
                <div className={`h-20 fs-2 pt-2 text-center text-light`}>
                  {bestSellerNames[index]}
                </div>
                <div className={`h-80 p-10`}>
                  <img
                    src={element}
                    alt={element}
                    className="object-fit-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-lg-6 mt-3 mb-20">
            <div className="col-12 d-flex justify-content-center align-items-center">
              <CreateHomeButton btnColor="btn-primary">
                <div className="d-inline-block">View Menu</div>
              </CreateHomeButton>
            </div>
          </div>
        </UtilCreateContainer>
      </UtilCreateSection>

      <UtilCreateSection
        bgImgSrc={
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      >
        <UtilCreateContainer>
          <div className="row mt-20">
            <div className="col-12 px-40 fs-xl-7 fs-sm-6 fs-5 text-light text-center">
              <lord-icon
                src="https://cdn.lordicon.com/surcxhka.json"
                trigger="loop"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "100%", height: "100%" }}
              ></lord-icon>
            </div>
            <div className="col-12 mt-1 fs-xl-7 fs-sm-6 fs-5 ff-title text-light text-center">
              Our Store
            </div>
            <div className="col-12 mt-1 fs-xl-3 fs-sm-3 fs-2 text-light text-center">
              Always open 10:00 am to 4:00 pm
            </div>
          </div>

          <div className="row mt-10">
            <a
              href="https://www.google.com/maps/place/SONIC+PRINT+SHOP/@16.1106293,120.5415025,17z/data=!3m1!4b1!4m6!3m5!1s0x339113441ea5fd3b:0x898d955fde706c87!8m2!3d16.1106242!4d120.5440774!16s%2Fg%2F11stytk36h?entry=ttu"
              className="col-12 px-0 border border-5 border-primary rounded-1"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/loc_layer.png" alt="" />
            </a>
            <div className="col-12 mt-lg-6 mt-3 fs-xl-3 fs-sm-2 fs-1 text-light text-center">
              We are located at 4G6V+6JW, Manaoag - Pozzorubio Rd, Pozorrubio,
              Pangasinan.
            </div>
          </div>

          <div className="row mt-20 mb-30">
            <div className="col-12 px-0 border border-5 border-primary rounded-1">
              <img src="/loc_3d.png" alt="" />
            </div>
            <div className="col-12 mt-lg-6 mt-3 fs-xl-3 fs-sm-2 fs-1 text-light text-center">
              Enter inside the food district to dine in or take out.
            </div>
          </div>
        </UtilCreateContainer>
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


            <UtilCreateBgImg
            bgImgSrc={
              "https://img.freepik.com/free-psd/chalk-italian-food-isolated_23-2150788278.jpg?t=st=1708946988~exp=1708950588~hmac=90b4daacc3ffedda817af342914dee8222577b38a0457c14f970a5fc54962b00&w=1380"
            }
            style={{ transform: "scaleY(-1)" }}
          ></UtilCreateBgImg>

          <div className="row text-center">
            {bestSellerImages.map((element, index) => (
              <div
                className="col-sm-4 col-12 mt-lg-6 mt-3 mb-sm-0 mb-3 h-sm-70"
                key={element + index}
              >
                <div>
                  <img
                    src={element}
                    alt={element}
                    className="border border-5 border-primary rounded-5 w-sm-100 h-sm-100 w-60 h-100 object-fit-cover"
                  />
                </div>
                <div className="mt-2 fs-sm-2 fs-1">
                  {bestSellerNames[index]}
                </div>
              </div>
            ))}
          </div>
*/
