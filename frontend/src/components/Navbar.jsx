/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { KeyPaths, ImagePaths, PagePaths } from "../Paths";
import {
  paddingX,
  Section,
  LordIcon,
  SmDiv,
  LgDiv,
  TitleDiv,
  SubTitleDiv,
  LinkDiv,
  CardIconLink,
  CardIcon,
  CardImgOverlay,
  CardImgLeftHorizontal,
  CardImgRightHorizontal,
  CardImgButton,
} from "../components/Components";

const Navbar = ({ isCustomerLogin, isAdminLogin, loginID }) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${paddingX} py-sm-1 py-2 bg-dark bg-opacity-75`}
      >
        <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
          <Link className="navbar-brand p-0" to={PagePaths.home}>
            <img src={ImagePaths.logo1} alt="Jourdan's Snack Corner" />
          </Link>

          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon navbar-dark"></span>
          </button>

          <div
            className="collapse navbar-collapse flex-grow-0"
            id="navbarToggler"
          >
            {isAdminLogin && !isCustomerLogin ? (
              <ul className="navbar-nav mt-lg-0 mt-5 nav-underline">
                <ListItemLink to={PagePaths.dashboard}>Dashboard</ListItemLink>
                <ListItemLink to={PagePaths.customers}>Customers</ListItemLink>
                <ListItemLink to={PagePaths.products}>Products</ListItemLink>
                <ListItemLink to={PagePaths.orders}>Orders</ListItemLink>
                <ListItemLink
                  onClick={() =>
                    localStorage.setItem(KeyPaths.isAdminLogin, "false")
                  }
                  to={PagePaths.home}
                >
                  Logout
                </ListItemLink>
              </ul>
            ) : (
              <>
                {!isAdminLogin && isCustomerLogin ? (
                  <ul className="navbar-nav mt-lg-0 mt-5 nav-underline">
                    <ListItemLink to={PagePaths.home}>Home</ListItemLink>
                    <ListItemLink to={PagePaths.about}>About</ListItemLink>
                    <ListItemLink to={PagePaths.menu}>Menu</ListItemLink>
                    <ListItemLink to={PagePaths.contact}>Contact</ListItemLink>
                    <ListItemLink to={`${PagePaths.cart}/${loginID}`}>
                      Cart
                    </ListItemLink>
                  </ul>
                ) : (
                  <ul className="navbar-nav mt-lg-0 mt-5 nav-underline">
                    <ListItemLink to={PagePaths.home}>Home</ListItemLink>
                    <ListItemLink to={PagePaths.about}>About</ListItemLink>
                    <ListItemLink to={PagePaths.menu}>Menu</ListItemLink>
                    <ListItemLink to={PagePaths.contact}>Contact</ListItemLink>
                    <ListItemLink to={PagePaths.login}>Login</ListItemLink>
                  </ul>
                )}
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

const ListItemLink = ({ to, onClick, children }) => {
  const resolvedPath = useResolvedPath(to);
  //useMatch() parameters requires an object that contains the path we want to access, and an optional boolean that tells the entire path must match
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active nav-item" : "nav-item"}>
      <Link
        to={to}
        onClick={onClick}
        className="nav-link text-light ff-bubblegum fs-lg-3xl fs-sm-2xl fs-xl"
      >
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
