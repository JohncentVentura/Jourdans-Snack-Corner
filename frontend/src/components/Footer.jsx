import { Link } from "react-router-dom";
import { paddingX } from "./Components";

export const Footer = () => {
    return (
      <>
        <footer className={`container-fluid ${paddingX} py-3 bg-dark d-flex flex-column align-items-center`}>
          <div className="text-light fs-xl">
            Copyright © Jourdan`s Snack Corner 2024
          </div>
          <Link className="text-light fs-xl" to="https://www.freepik.com/author/freepik" >
            Images from Freepik
          </Link>
        </footer>
      </>
    );
  };

export default Footer