import { Pagination } from "@mantine/core";
import { createStyles, Table } from "@mantine/core";

import { checkOrdersCustomer } from "api";
import dateFormater from "global/dateFormater";
import fetchOrders from "global/fetchOrders";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { SquareX, Dots, Select, X } from "tabler-icons-react";
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

  const [finalOrderList, setFinalOrderList] = useState([]);

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

  // const isAccepted = false;

  useEffect(() => {
    LoadOrders();
  }, []);

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
              <th>Time</th>
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
                  orderid={item._id}
                  className={cx({ [classes.rowSelected]: selected })}>
                  {/* <td>
                    <Checkbox
                      checked={selection.includes(item._id)}
                      onChange={() => toggleRow(item._id)}
                      transitionDuration={0}
                    />
                  </td> */}
                  <td>{dateFormater(item.timeStamp)}</td>
                  <td>
                    {item.itemArray.map((food, ind) => {
                      let str = food;
                      if (ind !== item.itemArray.length - 1) str += ", ";

                      return str;
                    })}
                  </td>
                  <td>{item.amount}</td>

                  <td className="flex items-center">
                    {
                      {
                        "1": (
                          <Select
                            style={{ marginRight: "1rem" }}
                            color="green"
                          />
                        ),
                        "0": (
                          <Dots
                            style={{ marginRight: "1rem" }}
                            color="orange"
                          />
                        ),
                        "-1": (
                          <SquareX
                            style={{ marginRight: "1rem" }}
                            color="red"
                          />
                        ),
                      }[item.isAccepted]
                    }
                    {/* <Ban
                      style={{ cursor: "pointer", marginRight: "1rem" }}
                      color="red"
                    /> */}
                  </td>
                  <td>
                    {item.isFullfiled ? (
                      <Select style={{ marginRight: "1rem" }} color="green" />
                    ) : (
                      <Dots style={{ marginRight: "1rem" }} color="orange" />
                    )}
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
