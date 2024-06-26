/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { ImagePaths, PagePaths } from "../Paths";
import {
  LoginCustomer,
  LoginAdmin,
  LogoutCustomer,
  LogoutAdmin,
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

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(`${PagePaths.port}${PagePaths.createAccount}`, { name, email, password })
      .then((res) => {
        console.log(res);
        navigate(PagePaths.login);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Section className="flex-column" style={{ height: "100vh" }}>
        <img
          src={ImagePaths.contact}
          alt={ImagePaths.contact}
          className="position-absolute z-n1 object-fit-cover"
        />
        <form
          action=""
          className="w-100 h-100 d-flex flex-column justify-content-center align-items-center"
          onSubmit={handleSubmit}
        >
          <LordIcon
            lordIconSrc={"https://cdn.lordicon.com/wuvorxbv.json"}
            lordIconClrs={"primary:#FFFFFF,secondary:#35aa90"}
            lordIconSize={5}
          />
          <TitleDiv className="text-light">Sign Up</TitleDiv>
          <SubTitleDiv className="text-light">
            Fill up the form to register
          </SubTitleDiv>
          <input
            className="mt-4 p-1 rounded-3 w-50 h-5 fs-lg"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="mt-2 p-1 rounded-3 w-50 h-5 fs-lg"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="mt-2 p-1 rounded-3 w-50 h-5 fs-lg"
            type="password"
            name="password"
            placeholder="Your Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="mt-2 w-50 btn btn-primary" type="submit">
            <SubTitleDiv className="p-1">Register</SubTitleDiv>
          </button>
        </form>
      </Section>
    </>
  );
};

export default Register;
