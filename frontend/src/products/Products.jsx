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
  CardIconLink,
  CardIcon,
  CardImgOverlay,
  CardImgLeftHorizontal,
  CardImgRightHorizontal,
  CardImgButton,
} from "../components/Components";

const Products = () => {
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
      <Section className="flex-column pt-6">
        <TitleDiv className="text-dark">Products</TitleDiv>
        <button>
          <Link to={PagePaths.createProduct}>Create Product</Link>
        </button>

        <ul>
          <li>
            <span>Number of Products: </span>
            <span>{productsCount}</span>
          </li>
          <li>Name / Price / Quantity / Description</li>
          <br />
          {products.map((product, index) => (
            <li key={`${product}-${index}`}>
              <span>{product.name} / </span>
              <span>{product.price} / </span>
              <span>{product.quantity}</span>
              <span>{product.description}</span>
              <div>
                <button>
                  <Link to={`${PagePaths.readProduct}/${product._id}`}>
                    Show
                  </Link>
                </button>
                <button>
                  <Link to={`${PagePaths.updateProduct}/${product._id}`}>
                    Edit
                  </Link>
                </button>
                <button>
                  <Link to={`${PagePaths.deleteProduct}/${product._id}`}>
                    Delete
                  </Link>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
};

export default Products;
