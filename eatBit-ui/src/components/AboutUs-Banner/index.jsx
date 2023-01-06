import React from "react";
import Link from "next/link";

const AboutUsBanner = () => {
    return (
        <div className="py-10 grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2 lg:gap-10 md:mt-32">
            <div className="mb-16 text-center lg:mb-0 lg:text-left">
                <span className="uppercase font-semibold text-primary text-md">
                    About Us
                </span>
                <h1 className="text-4xl font-bold leading-12 mt-4 md:text-5xl">
                    Deticated to Delight you
                </h1>
                <p className="my-6 text-gray-600 leading-8">
                    EatBit- A decentralised application built on blockchain that helps you order your favourite food through any crypto wallet.
                </p>
                <Link href="/customer/orders" legacyBehavior>
                    <a className="flex justify-center items-center gap-2 w-max m-auto py-2 px-4 bg-primary text-white font-bold border border-green-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-black lg:m-0 md:py-3 md:px-6" title="Orders">
                        Orders
                    </a>
                </Link>
            </div>

            <div>
                <img src="/svg/about.svg" alt="Business-Deal" width="400px" max-width="100%" />
            </div>
        </div>
    );
}

export default AboutUsBanner;