import React from "react";

export const UtilPaths = {
  home: "/",
  aboutUs: "/about-us",
  menu: "/menu",
  contacts: "/contacts",
  menuMeals: "/menu/meals",
  menuSnacks: "/menu/snacks",
  menuBeverages: "/menu/beverages",
  menuBundles: "/menu/bundles",
};

export const UtilSetContainer = ({ bgImgSrc, children, ...props }) => {
  return (
    <div className="container-fluid position-relative px-0 overflow-x-hidden" {...props}>

      {bgImgSrc !== null ? 
        <img src={bgImgSrc} className="position-absolute top-0 z-n1 w-100 h-100" /> 
        : <div className="position-absolute top-0 z-n1 w-100 h-100"></div>
      }
      {children}

    </div>
  );
};

