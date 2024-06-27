/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
} from "../components/Components";

const CreateProduct = () => {
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();

  const handleCreateProduct = (event) => {
    event.preventDefault();

    axios
      .post(`${PagePaths.port}${PagePaths.createProduct}`, {
        type,
        name,
        price,
        quantity,
      })
      .then(() => {
        navigate(PagePaths.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Section className="flex-column pt-6 bg-secondary">
        <div>Create Product</div>
        <button>
          <Link to={PagePaths.products}>Return to Products</Link>
        </button>

        <form>
          <label htmlFor="product-type-id">Type:</label>
          <input
            type="text"
            id="product-type-id"
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          />

          <label htmlFor="product-name-id">Name:</label>
          <input
            type="text"
            id="product-name-id"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="product-price-id">Price:</label>
          <input
            type="number"
            id="product-price-id"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />

          <label htmlFor="product-quantity-id">Quantity:</label>
          <input
            type="number"
            id="product-quantity-id"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />

          <button type="submit" onClick={handleCreateProduct}>
            Add
          </button>
        </form>
      </Section>
    </>
  );
};

export default CreateProduct;
