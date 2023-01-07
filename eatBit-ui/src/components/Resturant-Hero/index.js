import React, { useState, useEffect } from 'react';
import Link from "next/link";
import dynamic from 'next/dynamic';
const Register = dynamic(() => import('components/Resturant-Regsiter'), {
    ssr: false,
});

import { connectWallet, isRestrauntExist } from 'api';


// React Icons
import { GiHamburger } from "react-icons/gi";

const RestHero = () => {

    const [opened, setOpened] = useState(false);

    useEffect(()=> {

        connectWallet().then(() => {
            isRestrauntExist().then((d) => {
                
                if (d == "true") {
                    window.location.href = "/resturant/add-items"
                    return;
                }
            })
        })

    }, [])

    return (
        <div className="py-8 grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2 lg:gap-10 md:py-32">
            <div className="mb-16 text-center lg:mb-0 lg:text-left">
                <h1 className="text-4xl font-bold leading-12 md:text-6xl">
                    Register Your <span className="text-primary">Restaurant Now</span>
                </h1>
                <div onClick={() => setOpened(true)} className="cursor-pointer flex justify-center items-center gap-2 w-max m-auto py-2 px-4 bg-primary text-white font-bold border border-green-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-black lg:m-0 md:py-3 md:px-6" title="Order Now">
                    <span>Register Now</span>
                    <span><GiHamburger /></span>
                </div>
            </div>

            <div className="w-[90%]">
                <img src="img/img-rest.webp" alt="Women-Delivering-A-Package" />
            </div>

            {opened && <Register opened={opened} setOpened={setOpened} />}

        </div>
    )
}

export default RestHero;