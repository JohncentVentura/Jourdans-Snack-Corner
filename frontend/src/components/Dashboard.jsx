/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { ImagePaths,KeyPaths,PagePaths} from "../Paths";
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

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Section className="flex-column pt-6">
        <TitleDiv>Dashboard</TitleDiv>
        <button
          onClick={() => {
            localStorage.setItem(KeyPaths.isAdminLogin, "false")
            navigate(PagePaths.home);
          }}
        >
          Logout
        </button>
      </Section>
    </>
  );
};

export default Dashboard;
