import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export const UtilImages = {

};

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

export const UtilContainerPaddingX = "px-lg-20 px-10";

export const UtilCreateSection = ({
  bgImgSrc,
  bgImgAddOns,
  bgColor,
  children,
  ...props
}) => {
  return (
    <section
      className="position-relative top-0 start-0 px-0 overflow-x-hidden"
      {...props}
    >
      <div className="debug-breakpoint"></div>

      {bgImgSrc !== undefined ? (
        <img
          src={bgImgSrc}
          className={`position-absolute top-0 z-n1 w-100 h-100 object-fit-cover ${bgImgAddOns}`}
        />
      ) : (
        <div
          className={`position-absolute top-0 z-n1 w-100 h-100 ${bgColor}`}
        />
      )}

      {children}
    </section>
  );
};

//For creating a container with its own background using UtilCreateBgImg()
export const UtilCreateContainer = ({ children, ...props }) => {
  return (
    <div className={`container-fluid position-relative top-0 start-0 ${UtilContainerPaddingX} w-100 h-100`} {...props}>
      {children}
    </div>
  );
};

export const UtilCreateBgImg = ({ bgImgSrc, bgImgAddOns, ...props }) => {
  return (
    <div
      className="position-absolute top-0 start-0 z-n1 w-100 h-100 "
      {...props}
    >
      <img src={bgImgSrc} alt={bgImgSrc} className={`object-fit-fill ${bgImgAddOns}`} />
    </div>
  );
};

export const UtilCreatePageLink = ({to, children, ...props}) =>{
  const resolvedPath = useResolvedPath(to);
  //useMatch() parameters requires an object that contains the path we want to access, and an optional boolean that tells the entire path must match
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (  
    <li className={isActive ? `active nav-item ${props}` : `nav-item ${props}`}>
      <Link
        to={to}   
        className="nav-link ms-2 fs-xl-4 fs-sm-3 fs-1 ff-title text-light text-center"
      >
        {children}
      </Link>
    </li>
  );
}