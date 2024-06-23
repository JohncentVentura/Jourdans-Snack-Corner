import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PagePaths } from "../Paths";

const ReadProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${PagePaths.port}${PagePaths.products}/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
        navigate(PagePaths.products);
      });
  });

  return (
    <>
      <div>ReadProduct</div>
      <button>
        <Link to={PagePaths.products}>Return to Products</Link>
      </button>

      <div>
        <span>Name: </span>
        <span>{product.name}</span>
      </div>

      <div>
        <span>Price: </span>
        <span>{product.price}</span>
      </div>

      <div>
        <span>Quantity: </span>
        <span>{product.quantity}</span>
      </div>

      <div>
        <span>Description: </span>
        <span>{product.description}</span>
      </div>
    </>
  );
};

export default ReadProduct;
