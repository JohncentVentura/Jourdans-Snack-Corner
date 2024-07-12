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
      <Section className="flex-column pt-6 bg-primary">
        <TitleDiv>Delete Product</TitleDiv>
        <ButtonLinkDiv
          className="btn-warning text-dark"
          to={PagePaths.products}
        >
          Return
        </ButtonLinkDiv>

        <SubTitleDiv className="mt-6">Are You Sure You want to delete this product?</SubTitleDiv>
        <ButtonLinkDiv
          className="mt-2 px-2 py-1 btn-warning text-dark"
          onClick={handleDeleteProduct}
        >
          Yes
        </ButtonLinkDiv>
        <ButtonLinkDiv
          className="my-2 px-2 py-1 btn-warning text-dark"
          to={PagePaths.products}
        >
          No
        </ButtonLinkDiv>
      </Section>
    </>
  );
};

export default DeleteProduct;
