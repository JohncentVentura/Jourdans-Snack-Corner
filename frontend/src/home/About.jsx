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
  CardImgButton,
} from "../components/Components";

const testimonialsTitles = ["Facebook", "Facebook", "Facebook"];
const testimonialsImages = [
  ImagePaths.testimonials1,
  ImagePaths.testimonials2,
  ImagePaths.testimonials3,
];
const testimonialsLinks = [
  "https://www.facebook.com/photo/?fbid=7185067278198768&set=pcb.7185137581525071",
  "https://www.facebook.com/photo/?fbid=2116255002043907&set=pcb.2116255128710561",
  "https://www.facebook.com/photo/?fbid=2486325351551694&set=pcb.2486325511551678",
];

const About = () => {
  return (
    <>
      <Section className="flex-row" style={{ height: "76vh" }}>
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
                src={ImagePaths.bg4}
                className="d-block object-fit-cover"
                alt={ImagePaths.bg4}
              />
              <div className="carousel-caption">
                <LgDiv>Our Shop</LgDiv>
                <SmDiv>
                  Welcome to our humble local snack business! We specialize in
                  delicious snacks delivered right to your doorstep. Whether you
                  are craving sweet treats, savory delights, or sale bundles, we
                  have something for everyone.
                </SmDiv>
              </div>
            </div>
            <div className="carousel-item w-100 h-100">
              <img
                src={ImagePaths.bg5}
                className="d-block object-fit-cover"
                alt={ImagePaths.bg5}
              />
              <div className="carousel-caption">
                <LgDiv>Our Food</LgDiv>
                <SmDiv>
                  We believe that fast food should be fresh, flavorful, and fun.
                  That is why we are committed to using only the finest
                  ingredients, sourced locally whenever possible, to create
                  mouthwatering dishes that leave you craving more.
                </SmDiv>
              </div>
            </div>
            <div className="carousel-item w-100 h-100">
              <img
                src={ImagePaths.bg3}
                className="d-block object-fit-cover"
                alt={ImagePaths.bg3}
              />
              <div className="carousel-caption">
                <LgDiv>Our Work</LgDiv>
                <SmDiv>
                  Each item is made to order with care and attention, ensuring
                  that every bite is a burst of deliciousness. Thank you for
                  choosing Jourdans Snack Corner, we can not wait to welcome you
                  in and show you why we are your new favorite fast food joint!
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

      <Section className="flex-column py-6 bg-light">
        <TitleDiv className="text-dark ff-bubblegum">
          Customer Testimonials
        </TitleDiv>
        <SubTitleDiv className="text-dark">
          Our customers love working with us
        </SubTitleDiv>

        <div className="pt-6 px-6 d-flex flex-lg-row flex-column justify-content-center align-items-center">
          {testimonialsImages.map((title, index) => (
            <CardImgButton
              key={`${title}-${index}`}
              className={`col-lg-4 col-10 m-2 p-2 bg-light-subtle`}
              imgSrc={testimonialsImages[index]}
              cardTitle={testimonialsTitles[index]}
              cardText={`View our customers testimonials by viewing their posts in social media`}
              cardLink={testimonialsLinks[index]}
              cardLinkText={`View Post`}
            />
          ))}
        </div>
      </Section>

      <Section className="flex-column py-6 bg-secondary">
        <TitleDiv className="text-light ff-bubblegum">
          Commercial Bldg. Project
        </TitleDiv>
        <SubTitleDiv className="text-light">Coming Soon...</SubTitleDiv>

        <CardImgRightHorizontal
          className="mt-4 col-lg-12 col-10"
          imgSrc={ImagePaths.bldg}
          lordIconSrc={"https://cdn.lordicon.com/surcxhka.json"}
          lordIconClrs={"primary:#000000,secondary:#36aa90"}
          lordIconSize={6}
          cardTitle={`We are currently planning to build our own shop`}
          cardText={`Further details are subjective to change.`}
          cardLink={
            "https://www.google.com/maps/place/SONIC+PRINT+SHOP/@16.1106293,120.5415025,17z/data=!3m1!4b1!4m6!3m5!1s0x339113441ea5fd3b:0x898d955fde706c87!8m2!3d16.1106242!4d120.5440774!16s%2Fg%2F11stytk36h?entry=ttu"
          }
          cardLinkText={`Get Direction`}
        />
      </Section>
    </>
  );
};

export default About;
