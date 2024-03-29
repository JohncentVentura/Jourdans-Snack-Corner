import { React, useEffect } from "react";
//A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a <Link> renders an accessible <a> element with a real href that points to the resource it's linking to.
//useMatch is used to compare the current path we are on to whatever path we want to
//useResolvedPath is used to take relative or absolute path, combines it with the current path we are on, and gives the actual full path that you would be accessing
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import {
  UtilPaths,
  UtilContainerPaddingX,
  UtilCreateSection,
  UtilCreateContainer,
  UtilCreateBgImg,
} from "./Utilities";

const Navbar = () => {
  //withRouter(ScrollToTop);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top p-0 bg-dark bg-opacity-75">
        <div
          className={`container-fluid m-0 ${UtilContainerPaddingX} py-2 d-flex justify-content-between`}
        >
          <Link to={UtilPaths.home} className="navbar-brand m-0 p-0">
            {/* Navbar width & height depends on .navbar-brand img width & height */}
            <img src="/icon.png" alt="navbar-brand" />
          </Link>

          <button
            className="navbar-toggler text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav-links"
            aria-controls="nav-links"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars fs-sm-5 fs-3"></i>
          </button>

          <div className="collapse navbar-collapse flex-grow-0" id="nav-links">
            <ul className="navbar-nav nav-underline">
              <NavLink to={UtilPaths.home}>Home</NavLink>
              <NavLink to={UtilPaths.aboutUs}>About Us</NavLink>
              <NavLink to={UtilPaths.menu}>Menu</NavLink>
              <NavLink to={UtilPaths.contacts}>Contacts</NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

const NavLink = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to);
  //useMatch() parameters requires an object that contains the path we want to access, and an optional boolean that tells the entire path must match
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active nav-item" : "nav-item"}>
      <Link
        to={to}
        className="nav-link ms-2 fs-xl-4 fs-sm-3 fs-1 ff-title text-light text-center"
      >
        {children}
      </Link>
    </li>
  );
};

export function ScrollToTop({ history }) {
  useEffect(() => {
      const unlisten = history.listen(() => {
          window.scrollTo(0, 0);
      });
      return () => {
          unlisten();
      };
  }, [history]);

  return null;
}

export default Navbar;
