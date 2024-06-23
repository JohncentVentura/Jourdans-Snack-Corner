/* eslint-disable react/prop-types */
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { ImagePaths, PagePaths } from "../Paths";

const Navbar = ({ isLogin }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-dark bg-opacity-75">
        <div className="container-fluid">
          <Link className="navbar-brand" to={PagePaths.home}>
            <img
              src={ImagePaths.logo1}
              alt="Jourdan's Snack Corner"
              style={{width: "4vw", height: "6vh"}}
              className="object-fit-contain"
            />
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

          <div className="collapse navbar-collapse" id="navbarToggler">
            {isLogin ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
                <ListItemLink to={PagePaths.dashboard}>Dashboard</ListItemLink>
                <ListItemLink to={PagePaths.products}>Products</ListItemLink>
                <ListItemLink to={PagePaths.orders}>Orders</ListItemLink>
                <ListItemLink to={PagePaths.reports}>Reports</ListItemLink>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-underline">
                <ListItemLink to={PagePaths.home}>Home</ListItemLink>
                <ListItemLink to={PagePaths.about}>About</ListItemLink>
                <ListItemLink to={PagePaths.menu}>Menu</ListItemLink>
                <ListItemLink to={PagePaths.contact}>Contact</ListItemLink>
                <ListItemLink to={PagePaths.login}>Login</ListItemLink>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

const ListItemLink = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to);
  //useMatch() parameters requires an object that contains the path we want to access, and an optional boolean that tells the entire path must match
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active nav-item" : "nav-item"}>
      <Link to={to} className="nav-link ff-bubblegum fs-3xl text-light">
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
