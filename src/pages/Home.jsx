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
            <div className="col-sm-6 col-12 mt-sm-0 mt-1 d-flex justify-content-center align-items-center">
              <CreateHomeButton btnColor="btn-secondary">
                <i className="fas fa-phone-alt"></i>
                <div className="ms-sm-2 ms-1 d-inline-block">Work with us</div>
              </CreateHomeButton>
            </div>
          </div>
        </UtilCreateContainer>
      </UtilCreateSection>

      <UtilCreateSection
        bgImgSrc={
          "https://img.freepik.com/free-psd/chalk-italian-food-isolated_23-2150788275.jpg?t=st=1708849982~exp=1708853582~hmac=5517fe3e7fa156d20b766c724a13a5ca36c5fcd03e5a78b7bb5a2e6abe89e2d1&w=1380"
        }
      >
        <UtilCreateContainer>
          <UtilCreateBgImg
            bgImgSrc={
              "https://img.freepik.com/free-psd/chalk-italian-food-isolated_23-2150788275.jpg?t=st=1708849982~exp=1708853582~hmac=5517fe3e7fa156d20b766c724a13a5ca36c5fcd03e5a78b7bb5a2e6abe89e2d1&w=1380"
            }
          ></UtilCreateBgImg>

          <div className="row position-relative">
            <div className="col-12 fs-7 ff-title text-primary text-center ">
              Welcome Customer
            </div>
            <div className="col-12 fs-2 text-dark">
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
          <div className="row mt-10 d-flex justify-content-evenly">
            <div className="col-12 fs-7 ff-title text-secondary text-center ">
              Best Seller
            </div>
            <div className="col-4">
              <img src="/icon.png" alt="" className="pt-4 px-4 pb-2" />
            </div>
            <div className="col-4">
              <img src="/icon.png" alt="" className="pt-4 px-4 pb-2" />
            </div>
            <div className="col-4">
              <img src="/icon.png" alt="" className="pt-4 px-4 pb-2" />
            </div>
            <div className="col-4 text-center">
              <div>Burger with Fries</div>
            </div>
            <div className="col-4 text-center">
              <div>Chicken Teriyaki</div>
            </div>
            <div className="col-4 text-center">
              <div>Lumpiang Shanghai</div>
            </div>
          </div>
        </UtilCreateContainer>

        <UtilCreateContainer>
          <div className="row mt-10 ">
            <div className="col-12 fs-7 ff-title text-primary text-center">
              Open Hours
            </div>
            <div className="col-6 fs-2 text-dark text-center">
              Monday - Friday
            </div>
            <div className="col-6 fs-2 text-dark text-center">
              Saturday - Sunday
            </div>
            <div className="col-6 fs-2 text-dark text-center">8am - 5pm</div>
            <div className="col-6 fs-2 text-dark text-center">10am - 4pm</div>
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
          <div className="display-3 text-light">Shop Location</div>
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
