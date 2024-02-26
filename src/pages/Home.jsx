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
          <div className="row pt-xxl-20 pt-lg-30 pt-40">
            <div className="col-12 fs-xl-7 fs-sm-6 fs-5 ff-title text-primary text-center ">
              Welcome Customer
            </div>
            <div className="col-12 mt-lg-5 mt-3 fs-xl-3 fs-sm-2 fs-1 text-dark">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores,
              debitis adipisci! Officiis natus hic quasi cum harum saepe aperiam
              eius obcaecati? Placeat quia recusandae nobis tenetur facere
              similique quaerat in aut. Molestiae, repellat, et temporibus dolor
              cupiditate magni hic fugit ducimus quis mollitia, aliquid quidem
              ipsam est veniam modi dicta autem quo! Iure debitis tempora nemo
              culpa natus velit? Ad fuga amet ullam inventore nostrum ipsum
              excepturi qui eum, dolorum distinctio quisquam nulla, laboriosam
              hic incidunt, ex esse! Dolorem, natus?
            </div>
          </div>
        </UtilCreateContainer>

        <UtilCreateContainer>
          <div className="row mt-20 d-flex justify-content-evenly">
            <div className="col-12 fs-xl-7 fs-sm-6 fs-5 ff-title text-secondary text-center ">
              Best Seller
            </div>

            {bestSellerImages.map((element, index) => (
              <>
                {/*Displays Best Seller Images per column if screen width is small or higher */}
                <div className="row d-flex justify-content-center align-items-center">
                  <div
                    className="col-sm-4 col-12 mt-lg-5 mt-3 d-sm-block d-none"
                    key={`bestSellerImages-${index}`}
                  >
                    <img src={element} alt="" className="" />
                  </div>
                </div>

                <div className="row d-flex justify-content-center align-items-center">
                  <div
                    className="col-sm-4 col-12 mt-2 text-center d-sm-block d-none"
                    key={`bestSellerNames-${index}`}
                  >
                    <div className="fs-sm-2 fs-1">{bestSellerNames[index]}</div>
                  </div>
                </div>

                {/*Displays Best Seller Images per row if screen width is default */}
                <div
                  className="col-sm-4 col-12 mt-lg-5 mt-3 d-sm-none d-block"
                  key={`bestSellerImages-${index}`}
                >
                  <img src={element} alt="" className="" />
                </div>

                <div
                  className="col-sm-4 col-12 mt-2 text-center d-sm-none d-block"
                  key={`bestSellerNames-${index}`}
                >
                  <div className="fs-sm-2 fs-1">{bestSellerNames[index]}</div>
                </div>
              </>
            ))}
          </div>
        </UtilCreateContainer>

        <UtilCreateContainer>
          <UtilCreateBgImg
            bgImgSrc={
              "https://img.freepik.com/free-psd/chalk-italian-food-isolated_23-2150788278.jpg?t=st=1708946988~exp=1708950588~hmac=90b4daacc3ffedda817af342914dee8222577b38a0457c14f970a5fc54962b00&w=1380"
            }
            style={{ transform: "scaleX(-1)" }}
          ></UtilCreateBgImg>
          <div className="row mt-20 pb-sm-40 pb-30">
            <div className="col-12 fs-xl-7 fs-6 ff-title text-primary text-center">
              Open Hours
            </div>
            <div className="col-6 mt-lg-5 mt-3 fs-xl-3 fs-sm-2 fs-1 text-dark text-center">
              Monday - Friday
            </div>
            <div className="col-6 mt-lg-5 mt-3 fs-xl-3 fs-sm-2 fs-1 text-dark text-center">
              Saturday - Sunday
            </div>
            <div className="col-6 mt-2 fs-xl-3 fs-sm-2 fs-1 text-dark text-center">
              8am - 5pm
            </div>
            <div className="col-6 mt-2 fs-xl-3 fs-sm-2 fs-1 text-dark text-center">
              10am - 4pm
            </div>
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
          <div className="pt-30 fs-xl-7 fs-sm-6 fs-5 ff-title text-center text-light">Shop Location</div>
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
