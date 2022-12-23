import React from "react";
import Link from "next/link";

const ServicesBanner = () => {
    return (
        <div className="py-8 grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2 lg:gap-10">
            <div className="mb-16 lg:mb-0">
                <img src="svg/service.svg" alt="Online-Groceries" width="400px" max-width="100%" />
            </div>

            <div className="text-center lg:mb-0 lg:text-left">
                <span className="uppercase font-semibold text-primary text-md">
                    Food Delivery
                </span>
                <h1 className="text-4xl font-bold leading-12 mt-4 md:text-5xl">
                    Best Services to fulfuill your expectations.
                </h1>
                <p className="my-6 text-gray-600 leading-8">
                    Order food without the involvment of middle men.
                    <br></br>Meals at best prices.
                    <br></br><span className="text-primary">Order Now!</span>
                </p>

            </div>
        </div>
    );
}

export default ServicesBanner;