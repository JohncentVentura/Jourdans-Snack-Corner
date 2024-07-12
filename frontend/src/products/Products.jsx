/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { KeyPaths, ImagePaths, PagePaths } from "../Paths";
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
      <Section className="flex-column pt-8">
        <TitleDiv className="text-dark">Dashboard</TitleDiv>
        <div className="w-100 d-flex justify-content-between align-items-center">
        <ButtonLinkDiv
          className="btn-primary text-light"
          to={PagePaths.createProduct}
        >
          Add Item
        </ButtonLinkDiv>
        <ButtonLinkDiv
          className="btn-primary text-light"
          onClick={() => localStorage.setItem(KeyPaths.isAdminLogin, "false")}
          to={PagePaths.home}
        >
          Logout
        </ButtonLinkDiv>
        </div>

        <table className="table mt-4 w-100">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Type</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={`${product}-${index}`} className="">
                <th className="fs-xl-base fs-md-sm fs-xs" scope="row">{index + 1}</th>
                <td className="fs-xl-base fs-md-sm fs-xs">{product.type}</td>
                <td className="fs-xl-base fs-md-sm fs-xs">{product.name}</td>
                <td className="fs-xl-base fs-md-sm fs-xs">{`₱${product.price}.00`}</td>
                <td className="fs-xl-base fs-md-sm fs-xs">{product.quantity}</td>
                <td className="d-flex">
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Section>
    </>
  );
};

export default Products;
