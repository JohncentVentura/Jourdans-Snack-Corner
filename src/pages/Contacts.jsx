import React from "react";
import {
  UtilPaths,
  UtilCreateSection,
  UtilCreateContainer,
  UtilCreateBgImg,
} from "../Utilities";

const Contacts = () => {
  return (
    <>
      <UtilCreateSection
        bgImgSrc={
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      >
        <UtilCreateContainer>
          <div className="display-3 text-light">
            Sections to be created are Contact Form, Franchising Form
          </div>
        </UtilCreateContainer>
      </UtilCreateSection>
    </>
  );
};

export default Contacts;
