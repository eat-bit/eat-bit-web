import { useState, useEffect } from "react";
import { Accordion, Group, Avatar, Text } from "@mantine/core";
import { data as menuData } from "components/Menu-data/data";
import {
  MdOutlineAddShoppingCart,
  MdOutlineRemoveShoppingCart,
  MdStar,
} from "react-icons/md";
import CartContext from "Context/cart/cartContext.js";
import { useContext } from "react";
import { checkItemRestraunt, itemList } from "api";
import StringToArr from "global/stringToArr.js";

function AccordionLabel({ item }) {
  const { title, image_url, description } = item;

  console.log("hh", item)

  const { product, cart, increment, decrement } = useContext(CartContext);
  // console.log("added", cart);
  const { Not, setNot, setType } = useContext(CartContext);

  return (
    <Group noWrap>
      <Avatar src={image_url} radius="xl" size="lg" />

      <div>
        <div className="w-[100%] flex justify-between">
          <Text>{title}</Text>
          {cart.some((p) => p.itemId === item.itemId) ? (
            <button
              onClick={() => {
                setNot(true);
                setType("Remove");
                decrement(item);
              }}
              className="bg-pastelBackground text-gray-900 text-xl h-10 w-10 flex justify-center items-center rounded-md font-normal active:scale-95"
              title="Add To Cart"
            >
              <MdOutlineRemoveShoppingCart />
            </button>
          ) : (
            <button
              onClick={() => {
                setType("Add");
                setNot(true);
                increment(item);
              }}
              className="bg-pastelBackground text-gray-900 text-xl h-10 w-10 flex justify-center items-center rounded-md font-normal active:scale-95"
              title="Add To Cart"
            >
              <MdOutlineAddShoppingCart />
            </button>
          )}
        </div>

        <Text size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

function MenuItem(props) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    checkItemRestraunt(props.restIdx)
      .then((itemsIdx) => {
        return (StringToArr(itemsIdx));
      })
      .then((arr) => {
        const menu = [];
        for (let idx = 0; idx < arr.length; idx++) {
          itemList(arr[idx])
            .then((item) => {
              console.log("hars", item.id.toString())
              const foodItem = {
                idx: idx,
                title: "",
                description: "",
                image_url: "",
                price: "",
                itemId: ""
              };
              foodItem.title = item[0];
              foodItem.description = item[2];
              foodItem.image_url = item[3];
              foodItem.price = item.price.toString();
              foodItem.itemId = parseInt(item.id);
              menu.push(foodItem);
            })
            .then(() => {
              if (idx == arr.length - 1) setMenuItems(menu);
            });
        }
      });
  }, []);

  console.log("bay", menuItems)
  const items = menuItems.map((item, idx) => (
    <div className="m-3 w-full" key={idx}>
      <AccordionLabel item={item} />
    </div>
  ));

  return (
    <>
      <Accordion chevronPosition="right" variant="contained">
        {items}
      </Accordion>
      {/* {menuItems.length > 0 ? console.log("menu", menuItems) : console.log("no menu")} */}
    </>
  );
}

export default MenuItem;
