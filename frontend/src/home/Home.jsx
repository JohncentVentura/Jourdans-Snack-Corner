/* eslint-disable react/prop-types */
import { ImagePaths } from "../Paths";
import { CardIcon, Section } from "../components/Components";

//Lordicon imports
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
defineElement(lottie.loadAnimation); // define "lord-icon" custom element with default properties

const titles = ["Our Shop", "Our Food", "Our Service"];

const Home = () => {
  return (
    <>
        <Section
          className="d-flex justify-content-center align-items-center"
          style={{ height: "70vh" }}
        >
          <img
            src={ImagePaths.bgTitle}
            alt={ImagePaths.bgTitle}
            className="position-absolute z-n1 object-fit-cover"
          />

          <div className="col-7 d-flex flex-column justify-content-center align-items-center">
            <img
              src={ImagePaths.logo3}
              alt={ImagePaths.logo3}
              className="object-fit-contain"
            />
            <div className="text-light ff-bubblegum fs-4xl">
              Delivering Deliciousness in a Dash
            </div>
            <div className="w-50 d-flex justify-content-between align-items-center">
              <button type="button" className="btn btn-primary fs-lg">
                Order Now
              </button>
              <button type="button" className="btn btn-outline-light fs-lg">
                Learn More
              </button>
            </div>
          </div>
        </Section>

        <Section className="py-5 bg-light-subtle d-flex justify-content-center align-items-start gap-2">
          {titles.map((title, id) => (
            <CardIcon
              key={`${title}-${id}`}
              lordIconSrc={"https://cdn.lordicon.com/pkvlegzp.json"}
              cardTitle={title}
              cardText={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tempore beatae consectetur ipsum rerum ratione!`}
              cardLink={`#`}
              cardLinkText={`Click Here!`}
            />
          ))}
        </Section>

        <Section className="py-5 bg-light d-flex flex-column justify-content-center align-items-center">
          <div className="ff-bubblegum fs-4xl">Featured Menu Items</div>

          <div id="carouselExampleCaptions" className="carousel slide pt-5">
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

            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={ImagePaths.bgTitle} className="d-block w-100 h-50" alt={ImagePaths.bgTitle} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                  <p>
                    Some representative placeholder content for the first slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={ImagePaths.bgTitle} className="d-block w-100 h-50" alt={ImagePaths.bgTitle} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                  <p>
                    Some representative placeholder content for the second
                    slide.
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={ImagePaths.bgTitle} className="d-block w-100 h-50" alt={ImagePaths.bgTitle} />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
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
    </>
  );
};



export default Home;
