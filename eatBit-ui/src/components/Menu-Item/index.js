import { Accordion, Group, Avatar, Text } from '@mantine/core';
import { data as menuData } from 'components/Menu-data/data';
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart, MdStar } from "react-icons/md";
import CartContext from 'Context/cart/cartContext.js';
import { useContext } from "react";

function AccordionLabel({ item }) {

    const { title, image_url, description } = item;

    const { product, cart, increment, decrement } = useContext(CartContext);
    // console.log("added", cart);
    const { Not, setNot, setType } = useContext(CartContext);

    return (
        <Group noWrap>
            <Avatar src={image_url} radius="xl" size="lg" />

            <div>
                <div className='w-[100%] flex justify-between'>
                    <Text>{title}</Text>
                    {cart.some((p) => p.id === item.id) ? (
                        <button onClick={() => {
                            setNot(true)
                            setType("Remove")
                            decrement(item)
                        }} className="bg-pastelBackground text-gray-900 text-xl h-10 w-10 flex justify-center items-center rounded-md font-normal active:scale-95" title="Add To Cart">
                            <MdOutlineRemoveShoppingCart />
                        </button>
                    ) : (
                        <button onClick={() => {
                            setType("Add")
                            setNot(true)
                            increment(item)
                        }} className="bg-pastelBackground text-gray-900 text-xl h-10 w-10 flex justify-center items-center rounded-md font-normal active:scale-95" title="Add To Cart">
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


function MenuItem() {



    const items = menuData.map((item) => (

        <div className='m-3 w-full'>
            <AccordionLabel item={item} />
        </div>

    ));

    return <Accordion chevronPosition="right" variant="contained">{items}</Accordion>;
}

export default MenuItem;