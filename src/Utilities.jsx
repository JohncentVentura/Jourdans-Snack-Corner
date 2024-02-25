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
  imgSrcFill,
  imgSrcCover,
  children,
  ...props
}) => {
  return (
    <section className="position-relative top-0 overflow-x-hidden">
      <div className="debug-breakpoint"></div>
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

      <div
        className={`container-fluid ${UtilContainerPaddingX}`}
        {...props}
      >
        {children}
      </div>
    </section>
  );
};
