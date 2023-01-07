import React, { useContext, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
// Components
const Navbar = dynamic(() => import('components/Navbar'), { ssr: false });
import Footer from 'components/Footer';
const PlaceOrder = dynamic(() => import('components/Place-Order'), { ssr: false });

// Scroll To Top Hook
import useScrollTop from 'Hooks/useScrollTop';


// React Icons
import { MdStar } from "react-icons/md";
import { BiPlus, BiMinus } from "react-icons/bi";

// Cart Data

import CartContext from 'Context/cart/cartContext.js';
import { Button } from '@mantine/core';
import { useState } from 'react';


export default function Cart() {

    const { product, cart, increment, decrement, increaseTheCartQty, decreaseTheCartQty } = useContext(CartContext);

    const [opened, setOpened] = useState(false);

    // const cart = product.cart;
    console.log("shivu" , cart, product)
    // setState({ ...state, "name": "Shivangi" })

    useScrollTop();

    const [total, setTotal] = useState();

    useEffect(() => {
        console.log("number")
        setTotal(cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0));
    }, [cart])


    return (
        <div>
            <Head>
                <title>Cart - EatBit</title>
                <meta name="description" content="Responsive, clean and open source food delivery app using Next.js & Tailwind CSS." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="p-3 max-w-7xl m-auto">
                <Navbar />
                <div>
                    <h1 className="mt-8 text-3xl font-bold text-black text-center sm:text-left sm:text-4xl">
                        Cart
                    </h1>
                    <p className="my-5 text-gray-600 text-md leading-9 text-justify sm:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    <div className='flex w-full justify-around'>
                        <h1>Total Price: {total}</h1>

                        <Button size='sm' style={{ background: "#E74441" }} onClick={() => setOpened(true)}>Place Order</Button>
                    </div>

                    <div className="mt-8 grid place-items-center grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
                        {
                            cart ?
                                cart.map((product, index) =>
                                    product.qty > 0 && <div key={index} className="relative bg-gray-200 rounded-xl overflow-hidden shadow-slate-900 border border-gray-200" title={product.title}>
                                        <div className="">
                                            <img src={product.image_url} alt="Food-Image" max-height="200px" width="100%" className="ease-in-out duration-300" />
                                            <div className="bg-white p-4 px-3 pb-4 ease-in-out duration-300">
                                                <h3 className="mb-1">
                                                    <Link href={`/${product.route}`} legacyBehavior>
                                                        <a className="flex justify-between items-center text-xl font-semibold text-black">
                                                            <span>{product.title}</span>
                                                            <span>${product.price}</span>
                                                        </a>
                                                    </Link>
                                                </h3>
                                                <p className="text-sm text-gray-400 mb-2">{product.description}</p>
                                                <span className="text-xl text-yellow-600 flex items-center gap-1">
                                                    {
                                                        Array.from({ length: product.rating }).map((_, index) => (
                                                            <MdStar key={index} />
                                                        ))
                                                    }
                                                </span>
                                                <h1>Qty: {product.qty}</h1>
                                                <div className="absolute top-3 left-0 right-0 px-3 flex justify-between items-center gap-2 w-full">
                                                    <button onClick={() => decreaseTheCartQty(product)} className="bg-primary text-gray-900 text-xl h-10 w-10 flex justify-center items-center rounded-md font-normal active:scale-95" title="Decrease">
                                                        <BiMinus />
                                                    </button>
                                                    <button onClick={() => increaseTheCartQty(product)} className="bg-primary text-gray-900 text-xl h-10 w-10 flex justify-center items-center rounded-md font-normal active:scale-95" title="Increase">
                                                        <BiPlus />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                : null
                        }
                    </div>
                </div>

                {opened && <PlaceOrder setOpened={setOpened} opened={opened} totalPrice={total} />}
                <Footer />
            </div>
        </div>
    )
}