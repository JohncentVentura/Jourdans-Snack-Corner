/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ImagePaths, PagePaths } from "../Paths";
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
  ButtonLinkDiv,
} from "../components/Components";

const Orders = () => {
  //const [placeOrdersCount, setPlaceOrdersCount] = useState([]);
  const [placeOrders, setPlaceOrders] = useState([]);

  axios
    .get(`${PagePaths.port}${PagePaths.orders}`)
    .then((res) => {
      //setPlaceOrdersCount(res.data.count);
      setPlaceOrders(res.data.placeOrders);
    })
    .catch((error) => {
      console.log(error);
    }, []);

  const TableDisplay = ({ ...props }) => {
    return (
      <>
        <tr key={props.index}>
          <td>
            <SmDiv className="text-center text-dark">{props.order.name}</SmDiv>
          </td>
          <td>
            <SmDiv className="text-center text-dark">{props.order.quantity}</SmDiv>
          </td>
          <td>
            <SmDiv className="text-center text-dark">{props.order.price}</SmDiv>
          </td>
          <td>
            <SmDiv className="text-center text-dark">{props.order.priceTotal}</SmDiv>
          </td>
        </tr>
      </>
    );
  };

  return (
    <>
      <Section className="flex-column pt-6">
        <TitleDiv>Orders</TitleDiv>

        {placeOrders.map((placeOrder, index) => (
          <div key={`${placeOrder}-${index}`} className="">
            <LgDiv>{placeOrder.customerName}</LgDiv>
            <SmDiv>{placeOrder.customerNumber}</SmDiv>
            <SmDiv>{placeOrder.customerAddress}</SmDiv>
            <SmDiv>{placeOrder.orderTotal}</SmDiv>
            
            <table className="table table-secondary table-hover w-100">
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
                </tr>
              </thead>
              <tbody>
                {placeOrder.orders.map((order, index) => (
                  <TableDisplay
                    key={index}
                    index={index}
                    order={order}
                    orderId={order._id}
                    customerId={order.customerId}
                  />
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </Section>
    </>
  );
};

export default Orders;
