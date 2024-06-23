import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PagePaths } from "../Paths";

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
      <div className="-ff-title">Products</div>
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
            <div>
              <button>
                <Link to={`${PagePaths.readProduct}/${product._id}`}>Show</Link>
              </button>
              <button>
                <Link to={`${PagePaths.updateProduct}/${product._id}`}>Edit</Link>
              </button>
              <button>
                <Link to={`${PagePaths.deleteProduct}/${product._id}`}>Delete</Link>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
