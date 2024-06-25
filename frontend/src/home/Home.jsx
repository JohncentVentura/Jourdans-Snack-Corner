/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ImagePaths } from "../Paths";
import {
  Section,
  LordIcon,
  SmDiv,
  LgDiv,
  TitleDiv,
  SubTitleDiv,
  CardIconLink,
  CardIcon,
  CardImgOverlay,
  CardImgLeftHorizontal,
  CardImgRightHorizontal,
  CardImgButton
} from "../components/Components";

//Lordicon imports
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
defineElement(lottie.loadAnimation); // define "lord-icon" custom element with default properties

const titles = ["Our Shop", "Our Food", "Our Work"];

const Home = () => {
  return (
    <>
      <Section className="flex-row" style={{height: "70vh", }}>
        <img
          src={ImagePaths.homeTitle}
          alt={ImagePaths.homeTitle}
          className="position-absolute z-n1 object-fit-cover"
        />

        <div className="col-7 d-flex flex-column justify-content-center align-items-center">
          <img
            src={ImagePaths.logo3}
            alt={ImagePaths.logo3}
            className="object-fit-contain"
          />
          <div className="text-light ff-bubblegum fs-5xl">
            Delivering Deliciousness in a Dash
          </div>
          <div className="w-50 d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-primary fs-2xl">
              Order Now
            </button>
            <button type="button" className="btn btn-outline-light fs-2xl">
              Learn More
            </button>
          </div>
        </div>
      </Section>

      <Section className="flex-row py-5 bg-light-subtle">
        {titles.map((title, key) => (
          <CardIconLink
            key={`${title}-${key}`}
            className={`col-4 px-2 border-0`}
            lordIconSrc={"https://cdn.lordicon.com/pkvlegzp.json"}
            lordIconClrs={"primary:#000000,secondary:#35aa90"}
            lordIconSize={5}
            cardTitle={title}
            cardText={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tempore beatae consectetur ipsum rerum ratione!`}
            cardLink={`#`}
            cardLinkText={`Click Here!`}
          />
        ))}
      </Section>

      <Section className="flex-column py-5 bg-primary">
        <TitleDiv className="text-light">
          Featured Menu Items
        </TitleDiv>
        <SubTitleDiv className="text-light">Our customers love working with us</SubTitleDiv>

        <div className="pt-5 px-5 d-flex justify-content-center align-items-start">
          {titles.map((title, key) => (
            <CardImgOverlay
              key={`${title}-${key}`}
              className={`col-4 mx-2 text-light `}
              cardLink={`/`}
              imgSrc={ImagePaths.snacks}
              cardTitle={title}
            />
          ))}
        </div>
      </Section>

      <Section className="flex-column py-5">
        <img
          src={ImagePaths.homeAbout}
          alt={ImagePaths.homeAbout}
          className="position-absolute z-n1 object-fit-cover"
        />

        <TitleDiv className="text-light">Open Hours</TitleDiv>
        <CardIcon
          className="border-0 w-50 bg-transparent text-light d-flex flex-row justify-content-center align-items-center"
          lordIconSrc={"https://cdn.lordicon.com/pkvlegzp.json"}
          lordIconClrs={"primary:#FFFFFF,secondary:#35aa90"}
          lordIconSize={7}
          cardText={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tempore beatae consectetur ipsum rerum ratione!`}
        />

        <TitleDiv className="mt-5 text-light">Payment Methods</TitleDiv>
        <CardIcon
          className="border-0 w-50 bg-transparent text-light text-end d-flex flex-row-reverse justify-content-center align-items-center"
          lordIconSrc={"https://cdn.lordicon.com/pkvlegzp.json"}
          lordIconClrs={"primary:#FFFFFF,secondary:#35aa90"}
          lordIconSize={7}
          cardText={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tempore beatae consectetur ipsum rerum ratione!`}
        />
      </Section>

      <Section className="flex-column py-5 bg-secondary">
        <TitleDiv className="text-light">Delivering Areas</TitleDiv>
        <SubTitleDiv className="text-light">Our customers love working with us</SubTitleDiv>

        <CardImgLeftHorizontal
          className="mt-5 col-12"
          imgSrc={ImagePaths.delivery}
          lordIconSrc={"https://cdn.lordicon.com/qqvulgky.json"}
          lordIconClrs={"primary:#000000,secondary:#35aa90"}
          lordIconSize={5}
          cardTitle={`We are currently able to deliver around Pozorrubio, Pangasinan.`}
          cardText={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tempore beatae consectetur ipsum rerum ratione!`}
          cardLink={`/`}
          cardLinkText={`Get Direction`}
        />
      </Section>
    </>
  );
};

export default Home;
