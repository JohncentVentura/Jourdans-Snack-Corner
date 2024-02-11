import React from "react";
import { UtilCreateSection } from "../Utilities";

const AboutUs = () => {
  return (
    <>
      <UtilCreateSection
        style={{ padding: "6.5rem 0 0 0", height: "100vh"}}
        imgSrcFill={
          "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
        }
      >
        <div className="display-1">About Us</div>
      </UtilCreateSection>
      <UtilCreateSection
        style={{ padding: "6.5rem 0 0 0", height: "100vh"}}
        imgSrcFill={
          "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds"
        }
      >
        <div className="display-1">About Us</div>
      </UtilCreateSection>
    </>
  );
};

export default AboutUs;
