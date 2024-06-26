/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { ImagePaths } from "../Paths";
import {
  LoginCustomer,
  LoginAdmin,
  LogoutCustomer,
  LogoutAdmin,
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

const Cart = () => {
  return (
    <>
      <Section className="flex-column pt-6">
        <TitleDiv>Cart</TitleDiv>
        <button onClick={()=>{
          LogoutCustomer();
        }}>Logout</button>
      </Section>
    </>
  );
};

export default Cart;
