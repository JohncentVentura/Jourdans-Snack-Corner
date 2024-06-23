import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PagePaths } from "../Paths";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${PagePaths.port}${PagePaths.products}/${id}`)
      .then((res) => {
        setName(res.data.name);
        setDescription(res.data.description);
        setPrice(res.data.price);
        setQuantity(res.data.quantity);
      })
      .catch((error) => {
        console.log(error);
        navigate(PagePaths.products);
      });
  }, []);

  const handleUpdateProduct = () => {
    const data = {
      name,
      description,
      price,
      quantity,
    };
    
    axios
      .put(`${PagePaths.port}${PagePaths.products}/${id}`, data)
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
      <div>UpdateProduct</div>
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

        <button type="submit" onClick={handleUpdateProduct}>
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateProduct;
