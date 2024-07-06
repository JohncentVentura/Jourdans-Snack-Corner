/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
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
  ButtonLinkDiv,
} from "../components/Components";

const Orders = () => {
  const [placeOrdersCount, setPlaceOrdersCount] = useState([]);
  const [placeOrders, setPlaceOrders] = useState([]);

  axios
    .get(`${PagePaths.port}${PagePaths.orders}`)
    .then((res) => {
      setPlaceOrdersCount(res.data.count);
      setPlaceOrders(res.data.placeOrders);
    })
    .catch((error) => {
      console.log(error);
    }, []);

  return (
    <>
      <Section className="flex-column pt-6">
        <TitleDiv>Orders</TitleDiv>
        
      </Section>
    </>
  );
};

export default Orders;
