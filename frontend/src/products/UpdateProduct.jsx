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
  });

  const handleUpdateProduct = (event) => {
    event.preventDefault();

    axios
      .put(`${PagePaths.port}${PagePaths.updateProduct}/${id}`, {
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
        <div>UpdateProduct</div>
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

          <button type="submit" onClick={handleUpdateProduct}>
            Update
          </button>
        </form>
      </Section>
    </>
  );
};

export default UpdateProduct;
