/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { KeyPaths, ImagePaths, PagePaths } from "../Paths";
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
  ButtonDiv,
} from "../components/Components";

const Menu = ({ loginID }) => {
  const [products, setProducts] = useState([]);
  const [meals, setMeals] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [beverages, setBeverages] = useState([]);
  const [bundles, setBundles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${PagePaths.port}${PagePaths.menu}`)
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Sort products by type and store each product of same type in an array
  useEffect(() => {
    let productTypes = [];

    products.map((product) => {
      if (product.type === "Meal" && product.quantity != 0)
        productTypes.push(product);
    });
    setMeals(productTypes);
    productTypes = [];

    products.map((product) => {
      if (product.type === "Snack" && product.quantity != 0)
        productTypes.push(product);
    });
    setSnacks(productTypes);
    productTypes = [];

    products.map((product) => {
      if (product.type === "Beverage" && product.quantity != 0)
        productTypes.push(product);
    });
    setBeverages(productTypes);
    productTypes = [];

    products.map((product) => {
      if (product.type === "Bundle" && product.quantity != 0)
        productTypes.push(product);
    });
    setBundles(productTypes);
    productTypes = [];
  }, [products]);

  const MenuListItem = ({ ...props }) => {
    return (
      <>
        <li
          key={`${props.product}-${props.key}`}
          className="py-2 w-lg-30 w-sm-40 w-50 d-flex flex-column justify-content-center align-items-center"
        >
          <LgDiv className={`col-12 text-center ${props.textClr}`}>
            {props.product.name}
          </LgDiv>
          <div className="col-12 d-flex">
            <SmDiv
              className={`col-6 text-center ${props.textClr}`}
            >{`₱${props.product.price}.00`}</SmDiv>
            <SmDiv
              className={`col-6 text-center ${props.textClr}`}
            >{`Stock: ${props.product.quantity}`}</SmDiv>
          </div>
        </li>
      </>
    );
  };

  return (
    <>
      <Section className="pt-8 pb-4 flex-column bg-primary">
        <LordIcon
          lordIconSrc={"https://cdn.lordicon.com/bchxwwag.json"}
          lordIconClrs={"primary:#FFFFFF,secondary:#FFFFFF"}
          lordIconSize={5}
        />
        <TitleDiv className="text-light border-bottom border-light">Meals</TitleDiv>
        {meals.map((product, index) => (
          <MenuListItem
            product={product}
            key={index}
            textClr={"text-light"}
            btnClr={"btn-warning"}
          />
        ))}
      </Section>

      <Section className="py-4 flex-column bg-dark">
        <LordIcon
          lordIconSrc={"https://cdn.lordicon.com/ozzqxurw.json"}
          lordIconClrs={"primary:#FFFFFF,secondary:#FFFFFF"}
          lordIconSize={5}
        />
        <TitleDiv className="text-light border-bottom border-light">Snacks</TitleDiv>
        {snacks.map((product, index) => (
          <MenuListItem
            product={product}
            key={index}
            textClr={"text-light"}
            btnClr={"btn-secondary"}
          />
        ))}
      </Section>

      <Section className="py-4 flex-column bg-secondary">
        <LordIcon
          lordIconSrc={"https://cdn.lordicon.com/pqeabrsi.json"}
          lordIconClrs={"primary:#000000,secondary:#000000"}
          lordIconSize={5}
        />
        <TitleDiv className="text-dark border-bottom border-dark">Beverages</TitleDiv>
        {beverages.map((product, index) => (
          <MenuListItem
            product={product}
            key={index}
            textClr={"text-dark"}
            btnClr={"btn-dark"}
          />
        ))}
      </Section>

      <Section className="py-4 flex-column bg-light">
        <LordIcon
          lordIconSrc={"https://cdn.lordicon.com/ssoifezn.json"}
          lordIconClrs={"primary:#000000,secondary:#000000"}
          lordIconSize={5}
        />
        <TitleDiv className="text-dark border-bottom border-dark">Bundles</TitleDiv>
        {bundles.map((product, index) => (
          <MenuListItem
            product={product}
            key={index}
            textClr={"text-dark"}
            btnClr={"btn-primary"}
          />
        ))}
      </Section>
    </>
  );
};

export default Menu;
