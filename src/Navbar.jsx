import React from "react";
//useMatch is used to compare the current path we are on to whatever path we want to
//useResolvedPath is used to take relative or absolute path, combines it with the current path we are on, and gives the actual full path that you would be accessing
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="">
        <Link to="/">Logo</Link>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/meals">Meals</NavLink>
          <NavLink to="/snacks">Snacks</NavLink>
          <NavLink to="/beverages">Beverages</NavLink>
          <NavLink to="/bundles">Bundle</NavLink>
        </ul>
      </nav>
    </>
  );
};

function NavLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  //useMatch() parameters requires an object that contains the path we want to access, and an optional boolean that tells the entire path must match
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (  
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
