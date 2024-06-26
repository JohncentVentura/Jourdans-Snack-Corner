/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { ImagePaths, PagePaths } from "../Paths";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = (event) => {
    event.preventDefault();

    const data = {
      username,
      password
    }

    axios
      .get(`${PagePaths.port}${PagePaths.login}`, data)
      .then(() => {
        console.log(data);
        navigate(PagePaths.dashboard);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Section className="flex-column" style={{ height: "100vh" }}>
        <img
          src={ImagePaths.homeTitle}
          alt={ImagePaths.homeTitle}
          className="position-absolute z-n1 object-fit-cover"
        />

        <form
          onSubmit={onSubmit}
          action=""
          className="login-form w-100 h-100 d-flex flex-column justify-content-center align-items-center"
        >
          <LordIcon
            lordIconSrc={"https://cdn.lordicon.com/ebjjjrhp.json"}
            lordIconClrs={"primary:#FFFFFF,secondary:#35aa90"}
            lordIconSize={5}
          />
          <TitleDiv className="text-light">Sign In</TitleDiv>
          <SubTitleDiv className="text-light">
            Authorized Personnel Only
          </SubTitleDiv>
          <input
            className="mt-4 p-1 rounded-3 w-50 h-5 fs-lg"
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            className="mt-2 p-1 rounded-3 w-50 h-5 fs-lg"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            className="submit-btn mt-2 w-50 btn btn-primary"
            type="submit"
          >
            <SubTitleDiv className="p-1">Submit</SubTitleDiv>
          </button>
        </form>
      </Section>
    </>
  );
};

export default Login;
