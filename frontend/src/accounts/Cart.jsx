/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { ImagePaths, KeyPaths, PagePaths } from "../Paths";
import {
  Section,
  LordIcon,
  SmDiv,
  LgDiv,
  TitleDiv,
  SubTitleDiv,
  LinkDiv,
  ButtonDiv,
  CardIconLink,
  CardIcon,
  CardImgOverlay,
  CardImgLeftHorizontal,
  CardImgRightHorizontal,
  CardImgButton,
} from "../components/Components";

const Cart = () => {
  const { id } = useParams();
  const [account, setAccount] = useState({});
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${PagePaths.port}${PagePaths.cart}/${id}`)
      .then((res) => {
        setAccount(res.data);
        setOrders(res.data.orders);
      })
      .catch((error) => console.log(error));
  }, []); 

  const TableDisplay = ({ ...props }) => {
    return (
      <>
        <tr key={props.index}>
          <th scope="row">{props.index + 1}</th>
          <td>{props.order.name}</td>
          <td>{props.order.quantity}</td>
          <td>{props.order.priceTotal}</td>
        </tr>
      </>
    );
  };

  return (
    <>
      <Section className="flex-column pt-6 pb-50">
        <TitleDiv>Welcome {account.username}</TitleDiv>

        <table className="table table-secondary table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <TableDisplay key={index} index={index} order={order} />
            ))}
          </tbody>
        </table>

        <ButtonDiv
          className="btn-primary"
          onClick={() => {
            localStorage.setItem(KeyPaths.isCustomerLogin, "false");
            navigate(PagePaths.login);
          }}
        >
          Log Out
        </ButtonDiv>
      </Section>
    </>
  );
};

export default Cart;
