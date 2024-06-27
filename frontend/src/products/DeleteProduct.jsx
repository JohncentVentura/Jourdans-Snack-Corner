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
  ButtonDiv,
  ButtonLinkDiv,
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

  const handleDeleteProduct = (event) => {
    //event.preventDefault();

    axios
      .delete(`${PagePaths.port}${PagePaths.deleteProduct}/${id}`)
      .then(() => {
        console.log("DELETED");
        navigate(PagePaths.products);
      })
      .catch((error) => {
        navigate(PagePaths.products);
        console.log(error);
      });
  };

  return (
    <>
      <Section className="flex-column pt-6 bg-secondary">
        <div>Delete Product</div>
        <button>
          <Link to={PagePaths.products}>Return to Products</Link>
        </button>

        <br />
        <div>Are You Sure You want to delete this product?</div>
        <ButtonLinkDiv
          className="px-2 py-1 btn-primary text-light"
          onClick={handleDeleteProduct}
        >
          Yes
        </ButtonLinkDiv>
        <ButtonLinkDiv className="my-3 px-2 py-1 btn-primary text-light" to={PagePaths.products}>
          No
        </ButtonLinkDiv>
      </Section>
    </>
  );
};

export default DeleteProduct;
