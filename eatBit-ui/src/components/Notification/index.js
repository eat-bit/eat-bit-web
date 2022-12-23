import { Notification } from "@mantine/core";
import CartContext from 'Context/cart/cartContext.js';

import { useContext } from "react";
import { CircleCheck, CircleX } from "tabler-icons-react";


const Notify = ({ }) => {
    // console.log("shivi", type)
    const { setNot, type } = useContext(CartContext);

    if (type == "Remove") {
        return (
            <Notification icon={<CircleX size={18} />} onClose={() => setNot(false)} color="red" >
                Removed from Cart!!
            </Notification >
        )
    }

    return (
        <Notification icon={<CircleCheck size={18} />} onClose={() => setNot(false)} color="teal" title="Teal notification">
            Added to Cart!
        </Notification>


    )

}


export default Notify;