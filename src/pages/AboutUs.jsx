import React from "react";
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

const AboutUs = () => {
  return (
    <>
      {/*Overrided UtilCreateSection className*/}
      <UtilCreateSection
        bgImgSrc={
          "https://plus.unsplash.com/premium_photo-1670740967112-24fb66d024e1?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        className="position-relative top-0 start-0 px-0 overflow-x-hidden bg-img-blur"
      >
        {/*Overrided UtilCreateContainer className*/}
        <UtilCreateContainer
          className={`container-fluid ${UtilContainerPaddingX} w-100 h-100 header-container`}
        >
          <div className="row mt-10 pb-20">
            <div className="col-12 fs-xl-7 fs-sm-6 fs-5 ff-title text-light text-center ">
              Our Story
            </div>
            <div className="col-12 mt-lg-6 mt-3 fs-xl-3 fs-sm-2 fs-1 text-light">
              We believe that fast food should be fresh, flavorful, and fun.
              That is why we are committed to using only the finest ingredients,
              sourced locally whenever possible, to create mouthwatering dishes
              that leave you craving more from juicy burgers and crispy fries to
              savory sandwiches and satisfying salads, our menu has something
              for everyone. Each item is made to order with care and attention,
              ensuring that every bite is a burst of deliciousness.
            </div>
            <div className="col-4 mt-lg-3 mt-1 text-light fs-10">
              <lord-icon
                src="https://cdn.lordicon.com/fmclztgv.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "100%", height: "100%" }}
              ></lord-icon>
            </div>
            <div className="col-4 mt-lg-3 mt-1 text-light fs-10">
              <lord-icon
                src="https://cdn.lordicon.com/bchxwwag.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "100%", height: "100%" }}
              ></lord-icon>
            </div>
            <div className="col-4 mt-lg-3 mt-1 text-light fs-10">
              <lord-icon
                src="https://cdn.lordicon.com/pqeabrsi.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff"
                style={{ width: "100%", height: "100%" }}
              ></lord-icon>
            </div>
            <div className="col-12 mt-lg-3 mt-1 fs-xl-3 fs-sm-2 fs-1 text-light">
              But it is not just about the food, it is about the experience. Our
              friendly staff is here to greet you with a smile and make sure
              your visit is nothing short of fantastic. Thank you for choosing
              Jourdans Snack Corner, we can not wait to welcome you in and show
              you why we are your new favorite fast food joint in town!
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
            <div className="col-12 fs-xl-7 fs-sm-6 fs-5 ff-title text-light text-center">
              Social Media Post & Reviews
            </div>
            <div className="col-12 mt-10 ">
              <img
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="col-12 mt-10 ">
              <img
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="col-12 mt-10 mb-20">
              <img
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </UtilCreateContainer>
      </UtilCreateSection>
    </>
  );
};

export default AboutUs;
