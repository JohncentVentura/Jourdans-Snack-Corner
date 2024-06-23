import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import "./index.css"; //Deprecated, use import "../sass/main.css"; 

//imports for Bootstrap CSS, Bootstrap Bundle JS, & SASS for both CSS & Bootstrap Customization
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../sass/main.css"; //Must be imported after Bootstrap CSS & Bootstrap Bundle JS to override bootstrap

import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
