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

const Products = () => {
  const [products, setProducts] = useState([]); //Array of products
  const [productsCount, setProductsCount] = useState();

  useEffect(() => {
    axios
      .get(`${PagePaths.port}${PagePaths.products}`)
      .then((res) => {
        setProductsCount(res.data.count);
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Section className="flex-column pt-6">
        <TitleDiv className="text-dark">Products</TitleDiv>
        <ButtonLinkDiv
          className="btn-primary text-light"
          to={PagePaths.createProduct}
        >
          Add Item
        </ButtonLinkDiv>

        <ul className="w-100">
          <li>
            <span>Number of Products: </span>
            <span>{productsCount}</span>
          </li>
          <li>Name / Price / Quantity / Description</li>
          <br />
          
          {products.map((product, index) => (
            <li
              key={`${product}-${index}`}
              className="mt-1 w-50 d-flex justify-content-evenly"
            >
              <span>{product.type} / </span>
              <span>{product.name} / </span>
              <span>{product.price} / </span>
              <span>{product.quantity}</span>
              <div className="d-flex">
                <ButtonLinkDiv
                  to={`${PagePaths.updateProduct}/${product._id}`}
                  className="btn-primary text-light"
                >
                  Edit
                </ButtonLinkDiv>

                <ButtonLinkDiv
                  to={`${PagePaths.deleteProduct}/${product._id}`}
                  className="ms-5 btn-primary text-light"
                >
                  Delete
                </ButtonLinkDiv>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default Products;
