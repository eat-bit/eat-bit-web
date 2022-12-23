import { MdOutlineAddShoppingCart, MdStar } from "react-icons/md";
import { useContext } from "react";
import { Group, Avatar, Text, Accordion } from '@mantine/core';
import { useEffect, useState } from "react";


function AccordionLabel({ title, image_url, price, rating }) {
    return (
        <Group noWrap>
            <Avatar src={image_url} radius="xl" size="lg" />
            <div>

                <div className="flex w-[300px]">
                    <Text>{title}</Text>
                    <button className="text-gray-900 text-xl h-10 w-10 flex justify-center items-center rounded-md font-normal active:scale-95" title="Add To Cart">
                        <MdOutlineAddShoppingCart />
                    </button>
                </div>
                <div className="flex justify-between">
                    <div>Price: {price}</div>
                    <span className="flex items-center gap-1">
                        {
                            Array.from({ length: rating }).map((_, index) => (
                                <MdStar key={index} />
                            ))
                        }
                    </span>
                </div>
            </div>

        </Group>
    );
}


const Demo = ({ id = 1 }) => {

    // const { product } = useContext(CartState);

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {


        const list = data.find((itm) => itm.id == id);
        console.log("list", list)
        setMenuData(list.items);

    }, [id])


    const items = menuData.length > 0 && menuData.map((item, index) => (

        <Accordion.Item value={item.title} key={item.title} >
            <Accordion.Control>
                <AccordionLabel {...item} />
            </Accordion.Control>
            <Accordion.Panel>
                <Text size="sm">{item.description}</Text>
            </Accordion.Panel>
        </Accordion.Item >
    ));

    return (
        <Accordion chevronPosition="right" variant="contained">{items}</Accordion>
    );
}

export default Demo;