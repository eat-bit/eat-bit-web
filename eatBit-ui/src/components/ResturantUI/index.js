import { useState, useEffect } from "react";
import { Accordion, Group, Avatar, Text } from "@mantine/core";
import { data } from "components/Resturant-Data/data";
import { data as menuData } from "components/Menu-data/data";
import {
  MdOutlineAddShoppingCart,
  MdOutlineRemoveShoppingCart,
  MdStar,
} from "react-icons/md";
import MenuItem from "components/Menu-Item";
import { restaurantNumber, connectWallet, restaurantList, itemList } from "api";

function AccordionLabel({ title, description, location, image_url }) {
  return (
    <Group noWrap>
      <Avatar src={image_url} radius="xl" size="lg" />
      <div>
        <Text>{title}</Text>
        <Text size="sm" color="dimmed" weight={400}>
          {description}
        </Text>
      </div>
    </Group>
  );
}

function Resturant() {
  // const [totalRestaurants, setTotalRestaurants] = useState(0);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    connectWallet().then(() => {
      restaurantNumber()
        .then((rests) => {
          const arr = [];
          for (let idx = 0; idx < rests; idx++) {
            restaurantList(idx).then((restData) => {
              const restaurant = {
                idx: idx,
                title: "",
                description: "",
                location: "",
                image_url: "",
              };
              restaurant.title = restData[2];
              restaurant.description = restData[3];
              restaurant.location = restData[4];
              restaurant.image_url = restData[0];
              arr.push(restaurant);
              if (idx == rests - 1) setRestaurants(arr);
            });
          }
        });
    });
  }, []);

  const items = restaurants.map((item) => (
    <Accordion.Item value={item.title} key={item.title}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <MenuItem restIdx={item.idx} /> 
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <>
      <Accordion chevronPosition="right" variant="contained">
        {items}
      </Accordion>
    </>
  );
}

export default Resturant;
