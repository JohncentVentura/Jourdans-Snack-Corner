import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { PagePaths } from "../Paths";

const DeleteProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteProduct = () => {
    axios
      .delete(`${PagePaths.port}${PagePaths.products}/${id}`)
      .then(() => {
        navigate(PagePaths.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>Delete Product</div>
      <button>
        <Link to={PagePaths.products}>Return to Products</Link>
      </button>

      <br />
      <div>Are You Sure You want to delete this product?</div>
      <button onClick={handleDeleteProduct}>Yes</button>
      <button>
        <Link to={PagePaths.products}>No</Link>
      </button>
    </>
  );
};

export default DeleteProduct;
