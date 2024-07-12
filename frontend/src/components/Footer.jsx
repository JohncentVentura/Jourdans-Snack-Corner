/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import {
  paddingX,
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

export const Footer = () => {
  return (
    <>
      <footer
        className={`container-fluid ${paddingX} py-3 bg-dark d-flex flex-column align-items-center`}
      >
        <SmDiv className="text-light">
          Copyright © Jourdan`s Snack Corner 2024
        </SmDiv>
        <LinkDiv
          className="text-light"
          link="https://www.freepik.com/author/freepik"
        >
          Images from Freepik
        </LinkDiv>
        <LinkDiv className="text-light" link="https://lordicon.com/">
          Icons by Lordicon.com
        </LinkDiv>
        <LinkDiv className="text-light" link="https://www.google.com/maps/place/SONIC+PRINT+SHOP/@16.1106293,120.5415025,17z/data=!3m1!4b1!4m6!3m5!1s0x339113441ea5fd3b:0x898d955fde706c87!8m2!3d16.1106242!4d120.5440774!16s%2Fg%2F11stytk36h?entry=ttu">
          Maps by Google Maps
        </LinkDiv>
      </footer>
    </>
  );
};

export default Footer;
