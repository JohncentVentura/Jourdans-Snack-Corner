/* eslint-disable react/prop-types */
import { ImagePaths } from "../Paths";
import { CardIcon, CardImgOverlay, Section } from "../components/Components";

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

        <div className="col-8 d-flex flex-column justify-content-center align-items-center">
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

      <Section className="py-5 bg-light-subtle d-flex justify-content-center align-items-start gap-5">
        {titles.map((title, key) => (
          <CardIcon
            key={`${title}-${key}`}
            lordIconSrc={"https://cdn.lordicon.com/pkvlegzp.json"}
            cardTitle={title}
            cardText={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tempore beatae consectetur ipsum rerum ratione!`}
            cardLink={`#`}
            cardLinkText={`Click Here!`}
          />
        ))}
      </Section>

      <Section className="py-5 bg-primary d-flex flex-column justify-content-center align-items-center">
        <div className="text-light ff-bubblegum fs-4xl">
          Featured Menu Items
        </div>

        <div className="pt-5 d-flex justify-content-center align-items-start gap-5">
          {titles.map((title, key) => (
            <CardImgOverlay
              key={`${title}-${key}`}
              imgSrc={ImagePaths.snacks}
              cardTitle={title}
              cardText={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tempore beatae consectetur ipsum rerum ratione!`}
            />
          ))}
        </div>
      </Section>

      <Section className="py-5 bg-light-subtle">
        <div className="card mb-3 col-12 ">
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
                <lord-icon
                  src={"https://cdn.lordicon.com/pkvlegzp.json"}
                  trigger="loop"
                  colors="primary:#000000,secondary:#35aa90"
                  style={{ width: "4rem", height: "4rem" }}
                ></lord-icon>
                <h5 className="card-title ff-bubblegum fs-3xl">Delivery Coverage</h5>
                <p className="card-text fs-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam beatae eveniet numquam aspernatur molestiae laboriosam
                  deleniti dignissimos praesentium deserunt, tempore cumque,
                  debitis commodi cupiditate! Fugiat nesciunt quis esse
                  voluptates accusantium!
                </p>
                <a href="#" className="card-link">
                  Get Direction
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-5 bg-dark d-flex justify-content-center align-items-start gap-5">
      {titles.map((title, key) => (
          <CardIcon
            key={`${title}-${key}`}
            lordIconSrc={"https://cdn.lordicon.com/pkvlegzp.json"}
            cardTitle={title}
            cardText={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tempore beatae consectetur ipsum rerum ratione!`}
            cardLink={`#`}
            cardLinkText={`Click Here!`}
          />
        ))}
      </Section>


    </>
  );
};

export default Home;
