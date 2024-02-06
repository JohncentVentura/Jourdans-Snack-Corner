import React from "react";

const Home = () => {
  return (
    <>
      <div className="container-fluid p-0 overflow-x-hidden">
        <img
          src="https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="BG"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -10,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div className="row">
          <div className="col-md-1 col-0"></div>
          <div className="col-md-5 col-12 d-flex flex-column justify-content-center align-items-center">
            <img
              src="logo_2.png"
              alt="Jourdan's Snack Corner Logo"
              className="object-fit-contain w-75 h-75"
            />
          </div>
          <div className="col-md-5 col-12 d-flex flex-column justify-content-center align-items-md-start align-items-center">
            <div className="display-1">Business Slogan</div>
            <p className="fs-4">Business Subtitle</p>
          </div>
          <div className="col-md-1 col-0"></div>
        </div>
      </div>

      <div className="container-fluid"></div>
    </>
  );
};

export default Home;
