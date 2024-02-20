import React from "react";
//A <Link> is an element that lets the user navigate to another page by clicking or tapping on it. In react-router-dom, a <Link> renders an accessible <a> element with a real href that points to the resource it's linking to.
//useMatch is used to compare the current path we are on to whatever path we want to
//useResolvedPath is used to take relative or absolute path, combines it with the current path we are on, and gives the actual full path that you would be accessing
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { UtilCreateNav, UtilPaths } from "./Utilities";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top p-0 bg-dark bg-opacity-75">
        <UtilCreateNav>
          <Link to={UtilPaths.home} className="navbar-brand m-0 p-0">
            <img src="/logo_2.3.png" alt="navbar-brand" />
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
            <i className="fas fa-bars fs-md-6 fs-5"></i>
          </button>

          <div className="collapse navbar-collapse flex-grow-0" id="nav-links">
            <ul className="navbar-nav nav-underline">
              <NavLink to={UtilPaths.home}>Home</NavLink>
              <NavLink to={UtilPaths.aboutUs}>About Us</NavLink>
              <NavLink to={UtilPaths.menu}>Menu</NavLink>
              <NavLink to={UtilPaths.contacts}>Contacts</NavLink>
            </ul>
          </div>
        </UtilCreateNav>
      </nav>
    </>
  );
};

function NavLink({ to, children }) {
  const resolvedPath = useResolvedPath(to);
  //useMatch() parameters requires an object that contains the path we want to access, and an optional boolean that tells the entire path must match
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active nav-item" : "nav-item"}>
      <Link
        to={to}
        className="nav-link ms-2 fs-xl-5 fs-4 ff-bubblegum-sans text-light text-center"
      >
        {children}
      </Link>
    </li>
  );
}

export default Navbar;

/*
          <button
            type="button"
            className="navbar-toggler text-light border-light"
            data-bs-toggle="collapse"
            data-bs-target="#nav-search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="nav-search"
          >
            <form action="" className="d-flex" role="search">
              <input
                type="search"
                className="form-control ms-3 me-3"
                placeholder="🔍"
                aria-label="Search"
              />
              <button type="submit" className="btn btn-outline-light">
                Search
              </button>
            </form>
          </div>
*/
