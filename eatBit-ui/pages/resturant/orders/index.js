import { Button, Loader, Pagination, Skeleton } from "@mantine/core";
import {
  createStyles,
  Table
} from "@mantine/core";

import Link from "next/link";
import RestNavbar from 'components/Resturant-Navbar';
import {acceptOrder} from 'api'

import { Ban, Dots, Select } from "tabler-icons-react";
import { useEffect, useState } from "react";

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



export default function Orders() {
  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(["2"]);

  const toggleRow = (id) =>
    setSelection((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );

  const toggleAll = () =>
    setSelection((current) =>
      current.length === data.length ? [] : data?.map((item) => item.id)
    );

  const isAccepted = false;

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <RestNavbar />
      <div className="w-full py-5 px-5 flex justify-between bg-white">
        <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-black-600">
          Order List
        </h3>
      </div>
      <div className="flex flex-col justify-start w-full h-full py-3 px-5 bg-white">
        <Table
          sx={{ minWidth: 800 }}
          verticalSpacing="sm"
          style={{ background: "white" }}>
          <thead>
            <tr>
              <th>Customer Address</th>
              <th>Orders</th>
              <th>Total Price</th>
              <th>Accept/Reject</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              const selected = selection.includes(item._id);
              return (
                <tr
                  key={item._id}
                  className={cx({ [classes.rowSelected]: selected })}>

                  <td>{item.address}</td>
                  <td>{`${item.orders}`}</td>
                  <td>{item.price}</td>

                  <td className="flex items-center">
                    <Select
                      style={{ cursor: "pointer", marginRight: "1rem" }}
                      color="green"
                      onClick={() => acceptOrder(true, item.id)}
                    />
                    <Ban
                      style={{ cursor: "pointer", marginRight: "1rem" }}
                      color="red"
                      onClick={() => acceptOrder(false, item.id)}
                    />
                  </td>
                  <td className="">
                    {isAccepted ? (
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
