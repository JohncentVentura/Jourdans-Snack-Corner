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
  ButtonLinkDiv,
  CardIconLink,
  CardIcon,
  CardImgOverlay,
  CardImgLeftHorizontal,
  CardImgRightHorizontal,
  CardImgButton,
} from "../components/Components";

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

const featuredMenuTitles = [
  "Burger & Chips",
  "Chicken Teriyaki",
  "Dumplings Bundle",
];
const featuredMenuImages = [
  ImagePaths.featuredMenuItem1,
  ImagePaths.featuredMenuItem2,
  ImagePaths.featuredMenuItem3,
];

const Home = () => {
  return (
    <>
      <Section className="flex-row" style={{ height: "75vh" }}>
        <img
          src={ImagePaths.bg1}
          alt={ImagePaths.bg1}
          className="position-absolute z-n1 object-fit-cover"
        />

        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            src={ImagePaths.logo3}
            alt={ImagePaths.logo3}
            className="col-xxl-8 col-11 mt-6 d-lg-block d-none object-fit-contain"
          />
          <img
            src={ImagePaths.logo1}
            alt={ImagePaths.logo1}
            className="col-sm-3 col-5 d-lg-none d-block object-fit-contain"
          />
          <img
            src={ImagePaths.logo2}
            alt={ImagePaths.logo2}
            className="col-sm-6 col-11 d-lg-none d-block object-fit-contain"
          />

          <TitleDiv className="text-light ff-bubblegum ">
            Delivering Deliciousness in a Dash
          </TitleDiv>

          <ButtonLinkDiv
            className="btn btn-primary mt-2 px-2"
            to={PagePaths.about}
          >
            <SubTitleDiv>Learn More</SubTitleDiv>
          </ButtonLinkDiv>
        </div>
      </Section>

      <Section className="flex-lg-row flex-column py-6 bg-light-subtle">
        {ourTitles.map((title, index) => (
          <CardIconLink
            key={`${title}-${index}`}
            className={`col-lg-4 col-12 mt-2 px-2 border-0 bg-light-subtle`}
            lordIconSrc={ourIconSrcs[index]}
            lordIconClrs={"primary:#000000,secondary:#35aa90"}
            lordIconSize={5}
            cardTitle={title}
            cardText={ourTexts[index]}
          />
        ))}
      </Section>

      <Section className="flex-column py-6 bg-primary">
        <TitleDiv className="text-light">Featured Menu Items</TitleDiv>
        <SubTitleDiv className="text-light">
          Dishes being served and delivered
        </SubTitleDiv>

        <div className="mt-4 px-6 d-flex flex-md-row flex-column justify-content-center align-items-start">
          {featuredMenuTitles.map((title, index) => (
            <CardImgOverlay
              key={`${title}-${index}`}
              className={`col-md-4 col-11 my-4 mx-2 text-light `}
              cardLink={PagePaths.menu}
              imgSrc={featuredMenuImages[index]}
              cardTitle={featuredMenuTitles[index]}
            />
          ))}
        </div>

        <ButtonLinkDiv className="mt-4 btn-warning" to={PagePaths.menu}>
          <SubTitleDiv className="text-dark">View Menu</SubTitleDiv>
        </ButtonLinkDiv>
      </Section>

      <Section className="flex-column py-6">
        <img
          src={ImagePaths.bg2}
          alt={ImagePaths.bg2}
          className="position-absolute z-n1 object-fit-cover"
        />

        <TitleDiv className="text-light">Open 8am to 4pm</TitleDiv>
        <CardIcon
          className="border-0 w-100 bg-transparent text-light d-flex flex-column justify-content-center align-items-center"
          lordIconSrc={"https://cdn.lordicon.com/qvyppzqz.json"}
          lordIconClrs={"primary:#FFFFFF,secondary:#bd3131"}
          lordIconSize={7}
          cardText={`Our working hours and delivery service operates everyday, except for regular holidays or urgent emergencies.`}
        />

        <TitleDiv className="mt-6 text-light">Payment Methods</TitleDiv>
        <CardIcon
          className="border-0 w-100 bg-transparent text-light d-flex flex-column justify-content-center align-items-center"
          lordIconSrc={"https://cdn.lordicon.com/kndkiwmf.json"}
          lordIconClrs={"primary:#FFFFFF,secondary:#e3bf39"}
          lordIconSize={7}
          cardText={`Customers can pay their orders either through G-Cash or Cash on Delivery, strictly no owing (utang).`}
        />

        <TitleDiv className="mt-6 text-light">Pickup Address</TitleDiv>
        <CardIcon
          className="border-0 w-100 bg-transparent text-light d-flex flex-column justify-content-center align-items-center"
          lordIconSrc={"https://cdn.lordicon.com/surcxhka.json"}
          lordIconClrs={"primary:#FFFFFF,secondary:#35aa90"}
          lordIconSize={7}
          cardText={`You can also manually pickup your order in Brgy. Inoman, Pozorrubio, Pangasinan.`}
        />
      </Section>

      <Section className="flex-column py-6 bg-secondary">
        <TitleDiv className="text-light">Delivering Areas</TitleDiv>
        <SubTitleDiv className="text-light">
          Expanding our service one town at a time
        </SubTitleDiv>

        <CardImgLeftHorizontal
          className="mt-4 col-lg-12 col-10"
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
          cardLink={"https://www.google.com/maps/place/SONIC+PRINT+SHOP/@16.1106293,120.5415025,17z/data=!3m1!4b1!4m6!3m5!1s0x339113441ea5fd3b:0x898d955fde706c87!8m2!3d16.1106242!4d120.5440774!16s%2Fg%2F11stytk36h?entry=ttu"}
          cardLinkText={`Get Direction`}
        />
      </Section>
    </>
  );
};

export default Home;
