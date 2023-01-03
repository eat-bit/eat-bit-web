import React from "react";
import { Button, Loader, Pagination, Skeleton } from "@mantine/core";
// checkOrdersCustomer
// import { checkOrdersCustomer } from "api";
import {
  createStyles,
  Table,
  Checkbox,
  useMantineTheme,
  PasswordInput,
  Alert,
} from "@mantine/core";

import Link from "next/link";

import { Ban, Dots, Select } from "tabler-icons-react";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { checkOrdersCustomer, itemList, orderDetails } from "api";
// Components
const Navbar = dynamic(() => import("components/Navbar"), { ssr: false });
const MarkOrderComplete = dynamic(
  () => import("components/Customer-MarkOrderComplete"),
  { ssr: false }
);

export default function CustomerOrder() {
  const useStyles = createStyles((theme) => ({
    rowSelected: {
      backgroundColor: "var(--pastel-color)",
    },
  }));

  const data = [
    {
      id: "1",
      address: "M3 Street-2",
      orders: ["Pizza 2", "Burgers 5"],
      price: "1500",
    },
    {
      id: "2",
      address: "M3 Street-2",
      orders: ["Pizza 2", "Burgers 5"],
      price: "1500",
    },
    {
      id: "3",
      address: "M3 Street-2",
      orders: ["Pizza 2", "Burgers 5"],
      price: "1500",
    },
    {
      id: "4",
      address: "M3 Street-2",
      orders: ["Pizza 2", "Burgers 5"],
      price: "1500",
    },
  ];
  // const [orderList, setOrderList] = useState([]);
  const [finalOrderList, setFinalOrderList] = useState([]);
  const [finalOrderIds, setFinalOrderIds] = useState([]);
  // const [orderIds, setOrderIds] = useState([]);

  const setOrderIdsFunc = async () => {
    let orderIdArr = [];

    return checkOrdersCustomer().then((res) => {
      console.log(res);
      res = res.split(",");

      res.forEach((item, ind) => {
        if (ind < res[res.length - 1]) {
          orderIdArr.push(item);
        }
      });

      console.log(orderIdArr);

      return orderIdArr;
    });
  };

  const parseOrder = async (str, orderId) => {
    const ele = str.split(",");

    const itemArraySize = Number(ele[ele.length - 1] - 1);
    let itemArray = [];

    for (let ind = 1; ind < itemArraySize + 2; ind++) {
      itemArray.push(ele[ind]);
    }

    console.log(itemArray);

    const itemPromise = (itemArray = itemArray.map(async (item) => {
      return itemList(item).then((res) => {
        // console.log(res)
        return res[0];
      });
    }));

    const order = {
      _id: orderId,
      custAddress: ele[0],
      itemArray: await Promise.all(itemPromise),
      amount: ele[2 + itemArraySize],
      restrauntId: ele[3 + itemArraySize],
      isFullfiled: ele[4 + itemArraySize],
      isAccepted: ele[5 + itemArraySize],
      custPhysicalAddress: ele[6 + itemArraySize],
      custName: ele[7 + itemArraySize],
      custcontactNumber: ele[8 + itemArraySize],
      timeStamp: ele[9 + itemArraySize],
    };
    return order;
  };

  const fetchOrders = async (orderIdArray) => {
    let orderList = [];

    const orderPromises = orderIdArray.map(async (item) => {
      return orderDetails(item).then((res) => {
        return parseOrder(res, item);
      });
    });

    await Promise.all(orderPromises).then((results) => {
      orderList = results;
    });

    return orderList;
  };

  const LoadOrders = async () => {
    setOrderIdsFunc().then((res) => {
      fetchOrders(res).then((ress) => {
        console.log(ress);
        setFinalOrderList(ress);
      });
    });
  };

  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(["2"]);

  const isAccepted = false;

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <Navbar />
      <div className="w-full py-5 px-5 flex justify-between bg-white">
        <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-black-600">
          Order List
        </h3>
        {/* add reload button */}
        <div className="flex flex-row justify-end">
          <button
            onClick={LoadOrders}
            className="flex flex-row justify-center items-center bg-white border-2 border-black-600 rounded-md px-3 py-2 text-black-600 hover:bg-black-600 hover:text-white">
            <Dots size={20} strokeWidth={1.5} />
            <span className="ml-2">Reload</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-start w-full h-full py-3 px-5 bg-white">
        <Table
          sx={{ minWidth: 800 }}
          verticalSpacing="sm"
          style={{ background: "white" }}>
          <thead>
            <tr>
              {/* <th style={{ width: 40 }}>
                <Checkbox
                  onChange={toggleAll}
                  checked={selection.length === data.length}
                  indeterminate={
                    selection.length > 0 && selection.length !== data.length
                  }
                  transitionDuration={0}
                />
              </th> */}
              <th>Customer Address</th>
              <th>Orders</th>
              <th>Total Price</th>
              <th>Accepted</th>
              <th>Completed</th>
              <th>Mark Complete</th>
            </tr>
          </thead>
          <tbody>
            {finalOrderList?.map((item) => {
              const selected = selection.includes(item._id);
              return (
                <tr
                  key={item._id}
                  itemId={item._id}
                  className={cx({ [classes.rowSelected]: selected })}>
                  {/* <td>
                    <Checkbox
                      checked={selection.includes(item._id)}
                      onChange={() => toggleRow(item._id)}
                      transitionDuration={0}
                    />
                  </td> */}
                  <td>{item.custPhysicalAddress}</td>
                  <td>
                    {item.itemArray.map((food, ind) => {
                      let str = food;
                      if (ind !== item.itemArray.length - 1) str += ", ";

                      return str;
                    })}
                  </td>
                  <td>{item.amount}</td>

                  <td className="flex items-center">
                    {isAccepted ? (
                      <Select style={{ marginRight: "1rem" }} color="green" />
                    ) : (
                      <Dots style={{ marginRight: "1rem" }} color="orange" />
                    )}
                    {/* <Ban
                      style={{ cursor: "pointer", marginRight: "1rem" }}
                      color="red"
                    /> */}
                  </td>
                  <td>
                    <Select
                      style={{ cursor: "pointer", marginRight: "1rem" }}
                      color="green"
                    />
                  </td>
                  <td>
                    <MarkOrderComplete itemID={item._id} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
            marginTop: "2rem",
          }}>
          <Pagination size="sm" total={10} position="end"></Pagination>
        </div>
      </div>
    </div>
  );
}
