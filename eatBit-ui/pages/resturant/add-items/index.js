import FoodItem from "components/ResturantUI/index.js";
import { useState } from "react";
import {
  Modal,
  createStyles,
  useMantineTheme,
  Table,
  Checkbox,
  Pagination,
  Tooltip,
} from "@mantine/core";
import dynamic from "next/dynamic";

import { data } from "components/Featured-Food/data/data.js";
const RestNavbar = dynamic(() => import("components/Resturant-Navbar"), {
  ssr: false,
});

const AddItem = dynamic(() => import("components/Resturant-Add-Item"), {
  ssr: false,
});



const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor: "#e8fff0",
  },
}));

const Items = ({ }) => {
  const theme = useMantineTheme();

  const [open, setOpen] = useState(false);

  const [item, setItem] = useState({
    title: "",
    description: "",
    price: "",
    imageURL: "",
  });

  const { classes, cx } = useStyles();
  const [selection, setSelection] = useState(["2"]);

  return (
    <>
      <RestNavbar />
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="m-6 bg-primary text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Add Items
      </button>
      <div className="h-full w-full flex flex-col justify-center items-center mt-6">
        {/* <FoodItem food={restData} /> */}
        {open && (
          <AddItem open={open} setOpen={setOpen} />
        )}

        {/* menu items */}

        <div style={{ width: "100%" }}>
          <div className="w-full py-5 px-5 flex justify-between bg-white">
            <h3 class="font-medium leading-tight text-3xl mt-0 mb-2 text-black-600">
              Menu List
            </h3>
          </div>
          <div className="flex flex-col justify-start py-3 px-5 bg-white">
            <Table
              sx={{ minWidth: 800 }}
              verticalSpacing="sm"
              style={{ background: "white" }}
            >
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => {
                  const selected = selection.includes(item._id);
                  return (
                    <tr
                      key={item._id}
                      className={cx({ [classes.rowSelected]: selected })}
                    >
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.price}</td>
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
              }}
            >
              <Pagination size="sm" total={10} position="end"></Pagination>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Items;



