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
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();

  const handleCreateProduct = () => {
    const data = {
      name,
      description,
      price,
      quantity,
    };

    axios
      .post(`${PagePaths.port}${PagePaths.products}`, data)
      .then(() => {
        console.log(data);
        navigate(PagePaths.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Section className="flex-column pt-6">
        <div>Create Product</div>
        <button>
          <Link to={PagePaths.products}>Return to Products</Link>
        </button>

        <form>
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

          <label htmlFor="product-description-id">Description:</label>
          <input
            type="text"
            id="product-description-id"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <button type="submit" onClick={handleCreateProduct}>
            Create
          </button>
        </form>
      </Section>
    </>
  );
};

export default CreateProduct;
