/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { ImagePaths, KeyPaths, PagePaths } from "../Paths";
import {
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

const Login = () => {
  //const formLogin = document.querySelector(".form-login");
  //const inputEmail = document.querySelector(".input-email");
  //const inputPassword = document.querySelector(".input-password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${PagePaths.port}${PagePaths.login}`, { email, password })
      .then((res) => {
        console.log(res);
        if (res.data.loginStatus === "Login Admin") {
          localStorage.setItem(KeyPaths.loginID, res.data.user._id);
          localStorage.setItem(KeyPaths.isAdminLogin, "true");
          navigate(PagePaths.dashboard);
        } else if (res.data.loginStatus === "Login Customer") {
          localStorage.setItem(KeyPaths.loginID, res.data.user._id);
          localStorage.setItem(KeyPaths.isCustomerLogin, "true");
          navigate(`${PagePaths.cart}/${res.data.user._id}`);
        } else if (res.data.loginStatus === "Incorrect Password") {
          navigate(PagePaths.login);
        } else if (res.data.loginStatus === "Invalid Email") {
          navigate(PagePaths.login);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Section className="flex-column" style={{ height: "100vh" }}>
        <img
          src={ImagePaths.bgLogin}
          alt={ImagePaths.bgLogin}
          className="position-absolute z-n1 object-fit-cover"
        />

        <form
          onSubmit={handleSubmit}
          className="form-login w-100 h-100 d-flex flex-column justify-content-center align-items-center"
        >
          <LordIcon
            lordIconSrc={"https://cdn.lordicon.com/ebjjjrhp.json"}
            lordIconClrs={"primary:#FFFFFF,secondary:#35aa90"}
            lordIconSize={5}
          />
          <TitleDiv className="text-light">Sign In</TitleDiv>
          <SubTitleDiv className="text-light">
            Sign in with your email and password
          </SubTitleDiv>

          <input
            className="input-email mt-4 p-1 rounded-3 w-50 h-5 fs-lg"
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="input-password mt-2 p-1 rounded-3 w-50 h-5 fs-lg"
            type="password"
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="mt-2 w-50 btn btn-secondary" type="submit">
            <SubTitleDiv className="p-1 text-light">Log In</SubTitleDiv>
          </button>

          <div className="mt-2 w-40 d-flex justify-content-center align-items-center">
            <SmDiv className="me-2 text-light">Don't have an account?</SmDiv>
            <LinkDiv className="text-secondary" link={PagePaths.createAccount}>
              Register Here...
            </LinkDiv>
          </div>
        </form>
      </Section>
    </>
  );
};

export default Login;
