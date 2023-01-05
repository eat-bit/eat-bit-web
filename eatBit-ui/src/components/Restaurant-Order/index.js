import { createStyles, Pagination, Table } from "@mantine/core";

import dynamic from "next/dynamic";
const RestNavbar = dynamic(() => import("components/Resturant-Navbar"), {
  ssr: false,
});
const AcceptRejectOrder = dynamic(
  () => import("components/AcceptRejectOrders"),
  {
    ssr: false,
  }
);

import { checkOrdersRestaurant } from "api";
import fetchOrders from "global/fetchOrders";
import { useEffect, useState } from "react";
import { Dots, Select } from "tabler-icons-react";

const useStyles = createStyles(() => ({
  rowSelected: {
    backgroundColor: "var(--pastel-color)",
  },
}));

export default function RestaurantOrder() {
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(["2"]);
  const [finalOrderList, setFinalOrderList] = useState([]);

  const setOrderIdsFunc = async () => {
    return checkOrdersRestaurant().then((res) => {
      if(!res) return false;
      console.log(res);
      res = res.split(",");

      return res;
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

  useEffect(() => {
    LoadOrders();
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <RestNavbar />
      <div className="w-full py-5 px-5 flex justify-between bg-white">
        <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-black-600">
          Order List
        </h3>
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
              <th>Customer Physical Address</th>
              <th>Customer Name</th>
              <th>Customer Phone Number</th>
              <th>Orders</th>
              <th>Total Price</th>
              <th>Accept/Reject</th>
              <th>Completed</th>
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
                  <td>{item.custPhysicalAddress}</td>
                  <td>{item.custName}</td>
                  <td>{item.custcontactNumber}</td>
                  <td>
                    {item.itemArray.map((food, ind) => {
                      let str = food;
                      if (ind !== item.itemArray.length - 1) str += ", ";

                      return str;
                    })}
                  </td>
                  <td>{item.amount}</td>

                  <td className="flex items-center">
                    <AcceptRejectOrder itemID={item._id} currState={item.isAccepted}/>
                  </td>
                  <td className="">
                    {item.isFullfiled ? (
                      <Select style={{ marginRight: "1rem" }} color="green" />
                    ) : (
                      <Dots style={{ marginRight: "1rem" }} color="orange" />
                    )}
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
