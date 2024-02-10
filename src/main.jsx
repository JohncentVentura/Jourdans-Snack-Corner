//Default imports     
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
//import "./index.css"; //Deprecated, use import "../sass/main.css"; 

// imports Bootstrap CSS, Bootstrap Bundle JS, SASS for both CSS & Bootstrap Customization
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../sass/main.css"; //MUST BE imported after Bootstrap CSS & Bootstrap Bundle JS to override bootstrap

//React imports
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> 
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



/*

…or create a new repository on the command line
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/JohncentVentura/Jourdans-Snack-Corner.git
git push -u origin main

…or push an existing repository from the command line
git remote add origin https://github.com/JohncentVentura/Jourdans-Snack-Corner.git
git branch -M main
git push -u origin main

*/