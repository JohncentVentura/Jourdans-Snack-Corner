/* eslint-disable no-unused-vars */
import axios from "axios";
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
      <Section className="flex-column pt-6">
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
      </Section>
    </>
  );
};

export default DeleteProduct;
