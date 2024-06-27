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

const titles = ["Our Shop", "Our Food", "Our Work"];

const About = () => {
  return (
    <>
      <Section className="flex-row" style={{height: "75vh", }}>
        <div
          id="carouselExampleCaptions"
          className="carousel slide position-absolute w-100 h-100"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner w-100 h-100">
            <div className="carousel-item w-100 h-100 active">
              <img
                src={ImagePaths.bgHomeTitle}
                className="d-block object-fit-cover"
                alt={ImagePaths.bgHomeTitle}
              />
              <div className="carousel-caption">
                <LgDiv>About Us 1</LgDiv>
                <SmDiv>
                  Some representative placeholder content for the first slide.
                </SmDiv>
              </div>
            </div>
            <div className="carousel-item w-100 h-100">
              <img
                src={ImagePaths.bgHomeTitle}
                className="d-block object-fit-cover"
                alt={ImagePaths.bgHomeTitle}
              />
              <div className="carousel-caption">
                <LgDiv>About Us 2</LgDiv>
                <SmDiv>
                  Some representative placeholder content for the second slide.
                </SmDiv>
              </div>
            </div>
            <div className="carousel-item w-100 h-100">
              <img
                src={ImagePaths.bgHomeTitle}
                className="d-block object-fit-cover"
                alt={ImagePaths.bgHomeTitle}
              />
              <div className="carousel-caption">
                <LgDiv>About Us 3</LgDiv>
                <SmDiv>
                  Some representative placeholder content for the third slide.
                </SmDiv>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Section>

      <Section className="flex-column py-5 bg-light">
        <TitleDiv className="text-dark ff-bubblegum">
          Customer Testimonials
        </TitleDiv>
        <SubTitleDiv className="text-dark">Our customers love working with us</SubTitleDiv>

        <div className="pt-5 px-5 d-flex justify-content-center align-items-start">
          {titles.map((title, key) => (
            <CardImgButton
              key={`${title}-${key}`}
              className={`col-4 mx-2 p-1 bg-light-subtle`}
              imgSrc={ImagePaths.testimonials1}
              cardTitle={title}
              cardText={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tempore beatae consectetur ipsum rerum ratione!`}
              cardLink={`/`}
              cardLinkText={`View Post`}
            />
          ))}
        </div>
      </Section>

      <Section className="flex-column py-5 bg-secondary">
        <TitleDiv className="text-light ff-bubblegum">Commercial Bldg. Project</TitleDiv>
        <SubTitleDiv className="text-light">Coming Soon...</SubTitleDiv>

        <CardImgRightHorizontal
          className="mt-4 col-12"
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

export default About;
