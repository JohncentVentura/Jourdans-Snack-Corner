/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ImagePaths, PagePaths } from "../Paths";
import {
  Section,
  LordIcon,
  SmDiv,
  LgDiv,
  TitleDiv,
  SubTitleDiv,
  LinkDiv,
  ButtonDiv,
  CardIconLink,
  CardIcon,
  CardImgOverlay,
  CardImgLeftHorizontal,
  CardImgRightHorizontal,
  CardImgButton,
} from "../components/Components";

const titles = ["Our Shop", "Our Food", "Our Work"];

const ourTitles = ["Our Shop", "Our Food", "Our Work"];
const ourIconSrcs = [
  "https://cdn.lordicon.com/pkvlegzp.json",
  "https://cdn.lordicon.com/ozzqxurw.json",
  "https://cdn.lordicon.com/qqvulgky.json",
];
const ourTexts = [
  `Welcome to our humble local snack business! We specialize in delicious snacks delivered right to your doorstep. 
    Whether you are craving sweet treats, savory delights, or sale bundles, we have something for everyone.`,
  `We believe that fast food should be fresh, flavorful, and fun. That is why we are committed to using only the finest
    ingredients, sourced locally whenever possible, to create mouthwatering dishes that leave you craving more.`,
  `Each item is made to order with care and attention, ensuring that every bite is a burst of deliciousness. Thank you
    for choosing Jourdans Snack Corner, we can not wait to welcome you in and show you why we are your new favorite fast food joint!`,
];
const ourLinks = [PagePaths.about, PagePaths.menu, PagePaths.contact];
const ourLinkTexts = ["About Us...", "View Menu...", "Contact Us..."];

const Home = () => {
  return (
    <>
      <Section className="flex-row" style={{ height: "75vh" }}>
        <img
          src={ImagePaths.homeTitle}
          alt={ImagePaths.homeTitle}
          className="position-absolute z-n1 object-fit-cover"
        />

        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            src={ImagePaths.logo3}
            alt={ImagePaths.logo3}
            className="col-xxl-8 col-11 mt-5 d-lg-block d-none object-fit-contain"
          />
          <img
            src={ImagePaths.logo1}
            alt={ImagePaths.logo1}
            className="col-sm-3 col-5 d-lg-none d-block object-fit-contain"
          />
          <img
            src={ImagePaths.logo2}
            alt={ImagePaths.logo2}
            className="col-sm-6 col-10 d-lg-none d-block object-fit-contain"
          />

          <div className="text-light ff-bubblegum fs-xxl-5xl fs-lg-4xl fs-sm-2xl fs-xl">
            Delivering Deliciousness in a Dash
          </div>

          <div className="mt-1 w-50 d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-primary px-3 py-1">
              <SubTitleDiv>Order Now</SubTitleDiv>
            </button>
            <button type="button" className="btn btn-outline-light px-3 py-1">
              <SubTitleDiv>Learn More</SubTitleDiv>
            </button>
          </div>
        </div>
      </Section>

      <Section className="flex-row py-5 bg-light-subtle">
        {ourTitles.map((title, index) => (
          <CardIconLink
            key={`${title}-${index}`}
            className={`col-4 px-2 border-0 bg-light-subtle`}
            lordIconSrc={ourIconSrcs[index]}
            lordIconClrs={"primary:#000000,secondary:#35aa90"}
            lordIconSize={5}
            cardTitle={title}
            cardText={ourTexts[index]}
            //cardLink={ourLinks[index]}
            //cardLinkText={ourLinkTexts[index]}
          />
        ))}
      </Section>

      <Section className="flex-column py-5 bg-primary">
        <TitleDiv className="text-light">Featured Menu Items</TitleDiv>
        <SubTitleDiv className="text-light">
          Dishes being served and delivered
        </SubTitleDiv>

        <div className="mt-3 px-5 d-flex justify-content-center align-items-start">
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

        <ButtonDiv className="mt-3 btn-warning">
          <Link link={PagePaths.menu} className="text-decoration-none">
            <SubTitleDiv className="text-dark">View Menu</SubTitleDiv>
          </Link>
        </ButtonDiv>
      </Section>

      <Section className="flex-column py-5">
        <img
          src={ImagePaths.homeAbout}
          alt={ImagePaths.homeAbout}
          className="position-absolute z-n1 object-fit-cover"
        />

        <TitleDiv className="text-light">Open 8am to 4pm</TitleDiv>
        <CardIcon
          className="border-0 w-50 bg-transparent text-light d-flex flex-row justify-content-center align-items-center"
          lordIconSrc={"https://cdn.lordicon.com/qvyppzqz.json"}
          lordIconClrs={"primary:#FFFFFF,secondary:#bd3131"}
          lordIconSize={7}
          cardText={`Our working hours and delivery service operates everyday, except for regular holidays or urgent emergencies.`}
        />

        <TitleDiv className="mt-5 text-light">Payment Methods</TitleDiv>
        <CardIcon
          className="border-0 w-50 bg-transparent text-light text-end d-flex flex-row-reverse justify-content-center align-items-center"
          lordIconSrc={"https://cdn.lordicon.com/kndkiwmf.json"}
          lordIconClrs={"primary:#FFFFFF,secondary:#e3bf39"}
          lordIconSize={7}
          cardText={`Customers can pay their orders either through G-Cash or Cash on Delivery, strictly no owing (utang).`}
        />

        <TitleDiv className="mt-5 text-light">Pickup Address</TitleDiv>
        <CardIcon
          className="border-0 w-50 bg-transparent text-light d-flex flex-row justify-content-center align-items-center"
          lordIconSrc={"https://cdn.lordicon.com/surcxhka.json"}
          lordIconClrs={"primary:#FFFFFF,secondary:#35aa90"}
          lordIconSize={7}
          cardText={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tempore beatae consectetur ipsum rerum ratione!`}
        />
      </Section>

      <Section className="flex-column py-5 bg-secondary">
        <TitleDiv className="text-light">Delivering Areas</TitleDiv>
        <SubTitleDiv className="text-light">
          Our customers love working with us
        </SubTitleDiv>

        <CardImgLeftHorizontal
          className="mt-3 col-12"
          imgSrc={ImagePaths.delivery}
          lordIconSrc={"https://cdn.lordicon.com/qqvulgky.json"}
          lordIconClrs={"primary:#000000,secondary:#35aa90"}
          lordIconSize={5}
          cardTitle={`We are currently able to deliver around Pozorrubio, Pangasinan.`}
          cardText={`
                ○ Alipangpang
                ○ Amagbagan
                ○ Balacag
                ○ Banding
                ○ Bantugan
                ○ Batakil
                ○ Bobonan
                ○ Buneg
                ○ Cablong
                ○ Casanfernandoan
                ○ Castaño
                ○ Dilan
                ○ Don Benito
                ○ Haway
                ○ Imbalbalatong
                ○ Inoman
                ○ Laoac
                ○ Maambal
                ○ Malasin
                ○ Malokiat
                ○ Manaol
                ○ Nama
                ○ Palacpalac
                ○ Palguyod
                ○ Poblacion I
                ○ Poblacion II
                ○ Poblacion III
                ○ Poblacion IV
                ○ Rosario
                ○ Sugcong
                ○ Talogtog
                ○ Tulnac
                ○ Villegas
            `}
          cardLink={`/`}
          cardLinkText={`Get Direction`}
        />
      </Section>
    </>
  );
};

export default Home;
