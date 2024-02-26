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

export const UtilContainerPaddingX = "px-lg-20 px-10";

export const UtilCreateSection = ({
  bgImgSrc,
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
          className={`position-absolute top-0 z-n1 w-100 h-100 object-fit-cover`}
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

export const UtilCreateContainer = ({ children, ...props }) => {
  return (
    <div className={`container-fluid position-relative top-0 start-0 ${UtilContainerPaddingX} w-100 h-100`} {...props}>
      {children}
    </div>
  );
};

export const UtilCreateBgImg = ({ bgImgSrc, ...props }) => {
  return (
    <div
      className="position-absolute top-0 start-0 z-n1 w-100 h-100 "
      {...props}
    >
      <img src={bgImgSrc} alt={bgImgSrc} className="object-fit-fill" />
    </div>
  );
};
