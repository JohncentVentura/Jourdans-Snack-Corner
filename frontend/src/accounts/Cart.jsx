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
          <td>
            <SmDiv className="text-center text-dark">{props.order.name}</SmDiv>
          </td>
          <td className="d-flex justify-content-evenly align-items-center">
            <TableDisplayButton order={props.order} action={"add"}>
              +
            </TableDisplayButton>
            <SmDiv className="text-center text-dark">
              {props.order.quantity}
            </SmDiv>
            <TableDisplayButton order={props.order} action={"subtract"}>
              -
            </TableDisplayButton>
          </td>
          <td>
            <SmDiv className="text-center text-dark">
              ₱{props.order.price}
            </SmDiv>
          </td>
          <td>
            <SmDiv className="text-center text-dark">{`₱${props.order.priceTotal}`}</SmDiv>
          </td>
          <td>
            <TableDisplayButton order={props.order} action={"delete"}>
              Delete
            </TableDisplayButton>
          </td>
        </tr>
      </>
    );
  };

  const TableDisplayButton = ({ children, ...props }) => {
    return (
      <>
        <ButtonDiv
          className={
            (props.order.quantity >= 20 && props.action === "add") ||
            (props.order.quantity <= 1 && props.action === "subtract")
              ? "btn-dark disabled"
              : "btn-dark"
          }
          onClick={() => {
            axios
              .put(`${PagePaths.port}${PagePaths.cart}/${id}`, {
                order: props.order,
                action: props.action,
              })
              .then((res) => {
                console.log(res);
                setAccount(res.data);
                setOrders(res.data.orders);
                window.location.reload();
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          <SmDiv className="text-light">{children}</SmDiv>
        </ButtonDiv>
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
              <th scope="col" className="text-center text-dark">
                Name
              </th>
              <th scope="col" className="text-center text-dark">
                Quantity
              </th>
              <th scope="col" className="text-center text-dark">
                Price
              </th>
              <th scope="col" className="text-center text-dark">
                Total
              </th>
              <th scope="col" className="text-center text-dark"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <TableDisplay key={index} index={index} order={order} />
            ))}
          </tbody>
        </table>

        <div className="w-100 d-flex flex-column justify-content-center align-items-start">
          <LgDiv className="text-dark">{`Total: ₱${
            account.orderTotal || 0
          }`}</LgDiv>
          <ButtonDiv
            className="mt-2 btn-primary"
            onClick={() => {
              localStorage.setItem(KeyPaths.isCustomerLogin, "false");
              navigate(PagePaths.login);
            }}
          >
            Check Out
          </ButtonDiv>

          <ButtonDiv
            className="mt-2 btn-primary"
            onClick={() => {
              localStorage.setItem(KeyPaths.isCustomerLogin, "false");
              navigate(PagePaths.login);
            }}
          >
            Log Out
          </ButtonDiv>
        </div>
      </Section>
    </>
  );
};

export default Cart;
