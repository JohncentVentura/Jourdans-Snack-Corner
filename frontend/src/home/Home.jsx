/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ImagePaths } from "../Paths";
import {
  Section,
  LordIcon,
  SmDiv,
  LgDiv,
  TitleDiv,
  CardIconLink,
  CardIcon,
  CardImgOverlay,
} from "../components/Components";

//Lordicon imports
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
defineElement(lottie.loadAnimation); // define "lord-icon" custom element with default properties

const titles = ["Our Shop", "Our Food", "Our Service"];

const Home = () => {
  return (
    <>
      <Section className="flex-row" style={{ height: "70vh" }}>
        <img
          src={ImagePaths.homeTitle}
          alt={ImagePaths.homeTitle}
          className="position-absolute z-n1 object-fit-cover"
        />

        <div className="col-8 d-flex flex-column justify-content-center align-items-center">
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
            className={`col-4 px-1 border-0`}
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
        <TitleDiv className="text-light ff-bubblegum">
          Featured Menu Items
        </TitleDiv>

        <div className="pt-5 d-flex justify-content-center align-items-start">
          {titles.map((title, key) => (
            <CardImgOverlay
              key={`${title}-${key}`}
              className={`text-light col-4 border-0 px-2 bg-primary`}
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

        <TitleDiv className="text-light ff-bubblegum">Open Hours</TitleDiv>
        <CardIcon
          className="border-0 w-50 bg-transparent text-light d-flex flex-row justify-content-center align-items-center"
          lordIconSrc={"https://cdn.lordicon.com/pkvlegzp.json"}
          lordIconClrs={"primary:#FFFFFF,secondary:#35aa90"}
          lordIconSize={7}
          cardText={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tempore beatae consectetur ipsum rerum ratione!`}
        />

        <TitleDiv className="mt-5 text-light ff-bubblegum">Payment Methods</TitleDiv>
        <CardIcon
          className="border-0 w-50 bg-transparent text-light text-end d-flex flex-row-reverse justify-content-center align-items-center"
          lordIconSrc={"https://cdn.lordicon.com/pkvlegzp.json"}
          lordIconClrs={"primary:#FFFFFF,secondary:#35aa90"}
          lordIconSize={7}
          cardText={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tempore beatae consectetur ipsum rerum ratione!`}
        />
      </Section>

      <Section className="flex-column py-5 bg-secondary">
        <TitleDiv className="text-light ff-bubblegum">Delivering Areas</TitleDiv>

        <div className="mt-5 card mb-3 col-12 ">
          <div className="row g-0">
            <div className="col-6">
              <img
                src={ImagePaths.delivery}
                className="img-fluid rounded-start"
                alt={ImagePaths.delivery}
              />
            </div>
            <div className="col-6">
              <div className="card-body">
                <LordIcon
                  lordIconSrc={"https://cdn.lordicon.com/pkvlegzp.json"}
                  lordIconClrs={"primary:#000000,secondary:#35aa90"}
                  lordIconSize={5}
                />
                <div className="card-title ff-bubblegum fs-4xl">
                  We are currently able to deliver around Pozorrubio,
                  Pangasinan.
                </div>
                <div className="card-text fs-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam beatae eveniet numquam aspernatur molestiae laboriosam
                  deleniti dignissimos praesentium deserunt, tempore cumque,
                  debitis commodi cupiditate! Fugiat nesciunt quis esse
                  voluptates accusantium!
                </div>
                <Link to="#" className="card-link fs-xl">
                  Get Direction
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Home;
