import React from "react";
import {
  UtilPaths,
  UtilCreateSection,
  UtilCreateContainer,
  UtilCreateBgImg,
} from "../Utilities";

const AboutUs = () => {
  return (
    <>
      <UtilCreateSection
        style={{ height: "100vh" }}
        bgImgSrc={
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      >
        <UtilCreateContainer>
        <div className="pt-30 fs-xl-7 fs-sm-6 fs-5 ff-title text-center text-light">Story</div>
        </UtilCreateContainer>
      </UtilCreateSection>

      <UtilCreateSection
        style={{ height: "100vh" }}
        bgImgSrc={
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      >
        <UtilCreateContainer>
        <div className="pt-30 fs-xl-7 fs-sm-6 fs-5 ff-title text-center text-light">Social Media Post & Reviews</div>
        </UtilCreateContainer>
      </UtilCreateSection>
    </>
  );
};

export default AboutUs;
