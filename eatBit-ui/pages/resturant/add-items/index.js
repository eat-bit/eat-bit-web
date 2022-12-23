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

import { data } from "components/Featured-Food/data/data.js";
import RestNavbar from 'components/Resturant-Navbar';



import { Help } from "tabler-icons-react";

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
          setOpen(true)
        }}
        className="m-6 bg-primary text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Add Items
      </button>
      <div className="h-full w-full flex flex-col justify-center items-center mt-6">


        {/* <FoodItem food={restData} /> */}
        {open && (
          <Modal
            centered
            overlayColor={
              theme.colorScheme === "dark"
                ? theme.colors.dark[9]
                : theme.colors.gray[2]
            }
            withCloseButton={false}
            overlayOpacity={0.55}
            overlayBlur={3}
            opened={open}
            onClose={() => setOpen(!open)}
            size="lg"
          >
            <div className="cards w-sm">
              <h3 className="text-xl text-gray-900 dark:text-white mb-5">
                Add Menu Item
              </h3>
              <div className=" items-center">
                <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                  Item Name
                </label>

                <input
                  type="text"
                  className="form-control mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleText0"
                  placeholder="Item Name"
                  value={item.title}
                  onChange={(e) =>
                    setItem((old) => ({ ...old, title: e.target.value }))
                  }
                />
              </div>

              <div className="items-center">
                <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                  Image URL
                </label>

                <div className="flex">

                  <input
                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 h-8 mb-2 p-2 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                    type="text"
                    placeholder="Image URL"
                    value={item.imageURL}
                    onChange={(e) =>
                      setItem((old) => ({ ...old, imageURL: e.target.value }))
                    }
                  />
                  <Tooltip label="You can add image using imageshack.com" color="teal" position="right">
                    <a href="https://imageshack.com/" target="_blank">
                      <Help size={36} strokeWidth={2} color={"black"} />
                    </a>
                  </Tooltip>
                </div>


              </div>

              <div className=" items-center mt-3">
                <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                  Description
                </label>

                <textarea
                  type="text"
                  className="form-control mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleText0"
                  placeholder="Description"
                  value={item.description}
                  onChange={(e) =>
                    setItem((old) => ({ ...old, description: e.target.value }))
                  }
                />
              </div>

              <div className=" items-center mt-3">
                <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                  Price
                </label>

                <input
                  type="text"
                  className="form-control mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="exampleText0"
                  placeholder="Price"
                  value={item.price}
                  onChange={(e) =>
                    setItem((old) => ({ ...old, price: e.target.value }))
                  }
                />
              </div>

              <div className="flex items-center space-x-2 mt-5 justify-end">
                <button
                  onClick={() =>
                    addItem(
                      setItem.name,
                      setItem.price,
                      setItem.description,
                      setItem.imageURL
                    )
                  }
                  className="bg-primary text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                // style={{ background: loader ? "var(--secondary-color)" : "var(--primary-color)" }}
                >
                  Add
                </button>

                <button
                  className="bg-mainRed text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
                  onClick={() => setOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal>
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
