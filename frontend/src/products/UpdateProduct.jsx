/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PagePaths } from "../Paths";
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
  ButtonLinkDiv,
} from "../components/Components";

const UpdateProduct = () => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${PagePaths.port}${PagePaths.updateProduct}/${id}`)
      .then((res) => {
        setType(res.data.type);
        setName(res.data.name);
        setPrice(res.data.price);
        setQuantity(res.data.quantity);
      })
      .catch((error) => {
        console.log(error);
        navigate(PagePaths.products);
      });
  }, []);

  const handleUpdateProduct = (event) => {
    //event.preventDefault();

    axios
      .put(`${PagePaths.port}${PagePaths.updateProduct}/${id}`, {
        type,
        name,
        price,
        quantity,
      })
      .then((res) => {
        console.log(res);
        navigate(PagePaths.products);
      })
      .catch((error) => {
        console.log(error);
        navigate(PagePaths.products);
      });
  };

  return (
    <>
      <Section className="flex-column pt-6 bg-secondary">
        <TitleDiv>Update Product</TitleDiv>
        <ButtonLinkDiv
          className="btn-dark text-light"
          to={PagePaths.products}
        >
          Return
        </ButtonLinkDiv>

        <form className="mt-6 w-100 d-flex flex-column justify-content-center align-items-center">
          <label htmlFor="product-type-id">Type:</label>
          <select
            className="form-select w-50 p-2"
            id="product-type-id"
            aria-label="Default select example"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="Meal">Meal</option>
            <option value="Snack">Snack</option>
            <option value="Beverage">Beverage</option>
            <option value="Bundle">Bundle</option>
          </select>

          <label htmlFor="product-name-id">Name:</label>
          <input
            className="w-50 p-2"
            type="text"
            id="product-name-id"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="product-price-id">Price:</label>
          <input
            className="w-50 p-2"
            type="number"
            id="product-price-id"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <label htmlFor="product-quantity-id">Quantity:</label>
          <input
            className="w-50 p-2"
            type="number"
            id="product-quantity-id"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />

          <ButtonLinkDiv
            className="my-4 w-50 p-2 submit btn-dark text-light"
            onClick={handleUpdateProduct}
          >
            Update
          </ButtonLinkDiv>
        </form>
      </Section>
    </>
  );
};

export default UpdateProduct;
