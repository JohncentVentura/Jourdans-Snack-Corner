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

const bestSellerImages = ["/meals.png", "/snacks.png", "/bundles.png"];
const bestSellerNames = [
  "Fried Chicken",
  "Burger with Fries",
  "Lumpiang Shanghai",
];
const openHoursDays = ["Monday - Friday", "Saturday - Sunday", "Holidays"];
const openHourTimes = ["8am - 4pm", "7am - 5pm", "8am - 2pm"];

const Home = () => {
  return (
    <>
      <UtilCreateSection
        bgImgSrc={
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        style={{ height: "100vh" }}
      >
        <UtilCreateContainer
          className={`container-fluid ${UtilContainerPaddingX} w-100 h-100 header-container`}
        >
          {/* Displays Logo & Title if screen width is LG or above */}
          <div className="row mt-xxl-6 mt-xl-10 mt-20 h-auto d-lg-block d-none">
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
              <CreateHomeButton btnColor="btn-secondary">
                <i className="fas fa-phone-alt"></i>
                <div className="ms-sm-2 ms-1 d-inline-block">Work with us</div>
              </CreateHomeButton>
            </div>
          </div>
        </UtilCreateContainer>
      </UtilCreateSection>

      <UtilCreateSection bgImgSrc={"bg-light"}>
        <UtilCreateContainer>
          <UtilCreateBgImg
            bgImgSrc={
              "https://img.freepik.com/free-psd/chalk-italian-food-isolated_23-2150788278.jpg?t=st=1708946988~exp=1708950588~hmac=90b4daacc3ffedda817af342914dee8222577b38a0457c14f970a5fc54962b00&w=1380"
            }
            style={{ transform: "scaleY(-1)" }}
          ></UtilCreateBgImg>
          <div className="row pt-md-30 pt-sm-40 pt-50">
            <div className="col-12 fs-xl-7 fs-sm-6 fs-5 ff-title text-secondary text-center ">
              Welcome Customer
            </div>
            <div className="col-12 mt-lg-6 mt-3 fs-xl-3 fs-sm-2 fs-1 text-dark">
              Welcome to Jourdan`s Snack Corner, your ultimate destination for
              irresistible snacks that`ll tantalize your taste buds! Dive into a
              world of crunchy, savory, and downright delicious treats that are
              perfect for any occasion. Get ready to snack smarter and satisfy
              your cravings with our handpicked selection. Let the snacking
              begin!
            </div>
          </div>
        </UtilCreateContainer>

        <UtilCreateContainer>
          <div className="row mt-20">
            <div className="col-12 fs-xl-7 fs-sm-6 fs-5 ff-title text-primary text-center ">
              Best Seller
            </div>

            <div className="row text-center">
              {bestSellerImages.map((element, index) => (
                <div
                  className="col-sm-4 col-12 mt-lg-6 mt-3 mb-sm-0 mb-3 h-sm-70"
                  key={element + index}
                >
                  <div >
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
          </div>
        </UtilCreateContainer>

        <UtilCreateContainer>
          <UtilCreateBgImg
            bgImgSrc={
              "https://img.freepik.com/free-psd/chalk-italian-food-isolated_23-2150788278.jpg?t=st=1708946988~exp=1708950588~hmac=90b4daacc3ffedda817af342914dee8222577b38a0457c14f970a5fc54962b00&w=1380"
            }
            style={{ transform: "scaleX(-1)" }}
          ></UtilCreateBgImg>
          <div className="row mt-20 pb-sm-40 pb-50">
            <div className="col-12 fs-xl-7 fs-sm-6 fs-5 ff-title text-secondary text-center">
              Open Hours
            </div>

            {openHoursDays.map((element, index) => (
              <div className="col-md-4 col-12 mt-lg-6 mt-3 fs-xl-3 fs-sm-2 fs-1 text-dark text-center" key={element + index}>
                <div className="fs-xl-3 fs-sm-2 fs-1 text-dark">
                  {element}
                </div>
                <div className="mt-2 mb-md-0 mb-2 fs-xl-3 fs-sm-2 fs-1 text-dark">
                  {openHourTimes[index]}
                </div>
              </div>
            ))}
          </div>
        </UtilCreateContainer>
      </UtilCreateSection>

      <UtilCreateSection
        style={{ height: "100vh" }}
        bgImgSrc={
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      >
        <UtilCreateContainer>
          <div className="pt-30 fs-xl-7 fs-sm-6 fs-5 ff-title text-center text-light">
            Shop Location
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

*/
