import React, { useState } from 'react';
import Link from "next/link";
import Register from 'components/Resturant-Regsiter';


// React Icons
import { GiHamburger } from "react-icons/gi";

const RestHero = () => {

    const [opened, setOpened] = useState(false);

    return (
        <div className="py-8 grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2 lg:gap-10 md:py-32">
            <div className="mb-16 text-center lg:mb-0 lg:text-left">
                <h1 className="text-4xl font-bold leading-12 md:text-6xl">
                    Register Your <span className="text-primary">Restaurant Now</span>
                </h1>
                {/* <p className="my-6 text-gray-600 leading-8">
                    Order food from your Favourite restaurants with, now with your e-wallet
                </p> */}
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