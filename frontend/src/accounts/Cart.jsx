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
            <SmDiv className="text-start text-dark">{props.order.name}</SmDiv>
          </td>
          <td>
            <SmDiv className="text-start text-dark">
              {props.order.quantity}
            </SmDiv>
          </td>
          <td>
            <SmDiv className="text-start text-dark">{`₱${props.order.price}`}</SmDiv>
          </td>
          <td>
            <ButtonDiv
              className="ms-2 btn-dark"
              onClick={() => {
                axios
                  .put(`${PagePaths.port}${PagePaths.cart}/${id}`, {
                    product: props.order,
                    action: "add",
                  })
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              <SmDiv className="text-light">+</SmDiv>
            </ButtonDiv>
            <ButtonDiv
              className="ms-2 btn-dark"
              onClick={() => {
                axios
                  .put(`${PagePaths.port}${PagePaths.cart}/${id}`, {
                    action: "subtract",
                  })
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              <SmDiv className="text-light">-</SmDiv>
            </ButtonDiv>
            <ButtonDiv
              className="ms-2 btn-dark"
              onClick={() => {
                axios
                  .put(`${PagePaths.port}${PagePaths.cart}/${id}`, {
                    action: "delete",
                  })
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((error) => {
                    console.log(error);
                  });
              }}
            >
              <SmDiv className="text-light">Delete</SmDiv>
            </ButtonDiv>
          </td>
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
              <th scope="col">Name</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <TableDisplay key={index} index={index} order={order} />
            ))}
          </tbody>
        </table>

        <div className="w-100 d-flex flex-column justify-content-center align-items-start">
          <LgDiv className="text-dark">{`Total: ${account.orderTotal}`}</LgDiv>
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
