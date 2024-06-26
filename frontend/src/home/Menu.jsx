/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { ImagePaths, PagePaths } from "../Paths";
import {
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

const Menu = () => {
  const [products, setProducts] = useState([]); //Array of products
  const [productsCount, setProductsCount] = useState();

  useEffect(() => {
    axios
      .get(`${PagePaths.port}${PagePaths.products}`)
      .then((res) => {
        setProductsCount(res.data.count);
        setProducts(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Section className="pt-8 pb-4 flex-column bg-primary">
        <LordIcon
          lordIconSrc={"https://cdn.lordicon.com/qqvulgky.json"}
          lordIconClrs={"primary:#FFFFFF,secondary:#FFFFFF"}
          lordIconSize={5}
        />
        <TitleDiv className="text-light">Meals</TitleDiv>
        {products.map((product, index) => (
          <li
            key={`${product}-${index}`}
            className="pb-1 w-25 d-flex justify-content-between align-items-center"
          >
            <LgDiv className="text-light">{product.name}</LgDiv>
            <SmDiv className="text-light">{`₱${product.price}.00`}</SmDiv>
          </li>
        ))}
      </Section>

      <Section className="py-4 flex-column bg-dark">
        <LordIcon
          lordIconSrc={"https://cdn.lordicon.com/qqvulgky.json"}
          lordIconClrs={"primary:#FFFFFF,secondary:#FFFFFF"}
          lordIconSize={5}
        />
        <TitleDiv className="text-light">Snacks</TitleDiv>
        {products.map((product, index) => (
          <li
            key={`${product}-${index}`}
            className="pb-1 w-25 d-flex justify-content-between align-items-center"
          >
            <LgDiv className="text-light">{product.name}</LgDiv>
            <SmDiv className="text-light">{`₱${product.price}.00`}</SmDiv>
          </li>
        ))}
      </Section>

      <Section className="py-4 flex-column bg-secondary">
        <LordIcon
          lordIconSrc={"https://cdn.lordicon.com/qqvulgky.json"}
          lordIconClrs={"primary:#000000,secondary:#000000"}
          lordIconSize={5}
        />
        <TitleDiv className="text-dark">Beverages</TitleDiv>
        {products.map((product, index) => (
          <li
            key={`${product}-${index}`}
            className="pb-1 w-25 d-flex justify-content-between align-items-center"
          >
            <LgDiv className="text-dark">{product.name}</LgDiv>
            <SmDiv className="text-dark">{`₱${product.price}.00`}</SmDiv>
          </li>
        ))}
      </Section>

      <Section className="py-4 flex-column bg-light">
        <LordIcon
          lordIconSrc={"https://cdn.lordicon.com/qqvulgky.json"}
          lordIconClrs={"primary:#000000,secondary:#000000"}
          lordIconSize={5}
        />
        <TitleDiv className="text-dark">Bundles</TitleDiv>
        {products.map((product, index) => (
          <li
            key={`${product}-${index}`}
            className="pb-1 w-25 d-flex justify-content-between align-items-center"
          >
            <LgDiv className="text-dark">{product.name}</LgDiv>
            <SmDiv className="text-dark">{`₱${product.price}.00`}</SmDiv>
          </li>
        ))}
      </Section>
    </>
  );
};

export default Menu;
