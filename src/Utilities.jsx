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

const SectionAndNavPaddingX = "px-xxl-navX px-md-5 px-4";

export const UtilCreateSection = ({
  imgSrcFill,
  imgSrcCover,
  children,
  ...props
}) => {
  return (
    <section className="position-relative top-0 overflow-x-hidden">
      {imgSrcFill !== undefined ? (
        <img
          src={imgSrcFill}
          className="position-absolute top-0 z-n1 w-100 h-100 object-fit-fill"
        />
      ) : (
        <img
          src={imgSrcCover}
          className="position-absolute top-0 z-n1 w-100 h-100 object-fit-cover"
        />
      )}

      <div className={`container-fluid ${SectionAndNavPaddingX} pt-sm-0 pt-navY`} {...props}>
        {children}
      </div>
    </section>
  );
};

export const UtilCreateNav = ({ children, ...props }) => {
  return (
    <nav
      className={`container-fluid m-0 ${SectionAndNavPaddingX} py-1 d-flex justify-content-between`}
      {...props}
    >
      {children}
    </nav>
  );
};
