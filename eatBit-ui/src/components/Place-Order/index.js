import React from "react";
import { Button, Loader, Pagination, Skeleton } from "@mantine/core";
import { createStyles, Modal, useMantineTheme } from "@mantine/core";
import { useContext } from "react";
import { Help } from "tabler-icons-react";

import { getBalance, placeOrder } from "api";

import Link from "next/link";

import { useEffect, useState } from "react";

import RestNavbar from "components/Resturant-Navbar";
import CartContext from "Context/cart/cartContext";

const useStyles = createStyles((theme) => ({
  rowSelected: {
    backgroundColor: "bg-primary",
  },
}));


const PlaceOrder = ({ opened, setOpened, totalPrice }) => {
  const { cart } = useContext(CartContext);

  const theme = useMantineTheme();

  console.log("uio", cart);
  let arr = [];

  if (cart) {
    for (let it = 0; it < cart.length; it++) {
      console.log("cart item", cart[it], cart[it].qty)

      if (cart[it].qty > 1) {
        for (let items = cart[it].qty; items>0; items--) {
			arr.push(cart[it].itemId);		
        }
      }
      else {
		arr.push(cart[it].itemId)
      }
    }
  }

  console.log(arr);

  const [orderData, setorderData] = useState({
    name: "",
    ptaa: "",
    contactNo: "",
    itemId: arr,
  });

  return (
    <>
      <div className="w-[80%] h-[80%] bg-gradient-to-r from-primary-500 to-blue-500">
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
          opened={opened}
          onClose={() => setOpened(false)}
          size="lg"
        >
          <div
            className="cards w-sm"
            style={{ background: "var(--pastel-color)" }}
          >
            <h3 className="text-xl text-gray-900 dark:text-white mb-5">
              Place Order
            </h3>
            <div className=" items-center">
              <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                Full Name
              </label>

              <input
                type="text"
                className="form-control mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleText0"
                placeholder="Full Name"
                value={orderData.name}
                onChange={(e) =>
                  setorderData((old) => ({ ...old, name: e.target.value }))
                }
              />
            </div>

            <div className=" items-center mt-3">
              <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                Phone
              </label>

              <input
                type="number"
                className="form-control mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleText0"
                placeholder="Phone"
                value={orderData.contactNo}
                onChange={(e) =>
                  setorderData((old) => ({ ...old, contactNo: e.target.value }))
                }
              />
            </div>

            <div className=" items-center mt-3">
              <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                Address
              </label>

              <input
                type="text"
                className="form-control mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleText0"
                placeholder="address"
                value={orderData.ptaa}
                onChange={(e) =>
                  setorderData((old) => ({ ...old, ptaa: e.target.value }))
                }
              />
            </div>

            <div className=" items-center mt-3">
              <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                Total Price
              </label>

              <input
                type="number"
                className="form-control mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="exampleText0"
                placeholder="total price"
                disabled
                value={totalPrice}
              />
            </div>

            <div className="flex items-center space-x-2 mt-5 justify-end">
              {/* <Link href="/customer/orders" legacyBehavior> */}
              <a>
                <button
                  onClick={() => {
                    //   console.log("data", orderData);
                    placeOrder(orderData.itemId, orderData.ptaa, orderData.name, orderData.contactNo, totalPrice);
                    // getBalance();
                    setOpened(!opened);
                  }}
                  className="bg-primary text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Place Order
                </button>
              </a>
              {/* </Link> */}

              <button
                className="bg-mainRed text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
                onClick={() => setOpened(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default PlaceOrder;
