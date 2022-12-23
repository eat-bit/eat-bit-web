import Link from "next/link";
import { useState } from "react";
import { Notification } from "@mantine/core";
import { MdOutlineAddShoppingCart, MdOutlineRemoveShoppingCart, MdStar } from "react-icons/md";
import CartContext from 'Context/cart/cartContext.js';
import { useContext } from "react";



const FoodItem = ({ food, key }) => {



    const { product, cart, increment, decrement } = useContext(CartContext);
    // console.log("added", cart);
    const { Not, setNot, setType } = useContext(CartContext);



    return (
        <>
            <div key={key} className="relative bg-pastelBackground max-w-sm rounded overflow-hidden shadow-lg">
                <div className="absolute top-3 right-0 px-3 z-50">

                    {cart.some((p) => p.id === food.id) ? (
                        <button onClick={() => {
                            setNot(true)
                            setType("Remove")
                            decrement(food)
                        }} className="bg-pastelBackground text-gray-900 text-xl h-10 w-10 flex justify-center items-center rounded-md font-normal active:scale-95" title="Add To Cart">
                            <MdOutlineRemoveShoppingCart />
                        </button>
                    ) : (
                        <button onClick={() => {
                            setType("Add")
                            setNot(true)
                            increment(food)
                        }} className="bg-pastelBackground text-gray-900 text-xl h-10 w-10 flex justify-center items-center rounded-md font-normal active:scale-95" title="Add To Cart">
                            <MdOutlineAddShoppingCart />
                        </button>
                    )}

                </div>
                {/* 
            <Link href={`/customer/resturant/${food.resturantId}`} legacyBehavior>
                <a> */}
                <img className="w-full" src={food.image_url} alt="Sunset in the mountains" />
                {/* </a>
            </Link> */}

                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{food.title}</div>
                    <p className="text-gray-700 text-base">
                        {food.description}
                    </p>
                </div>
                <div className="flex justify-between px-6 pt-4 pb-2">
                    <h3 className="flex justify-between items-center text-xl font-semibold mb-1 text-white">
                        <span>MATIC {food.price}</span>
                    </h3>

                    <span className="flex items-center gap-1">
                        {
                            Array.from({ length: food.rating }).map((_, index) => (
                                <MdStar key={index} />
                            ))
                        }
                    </span>
                </div>
            </div>
        </>

    )
}

export default FoodItem;