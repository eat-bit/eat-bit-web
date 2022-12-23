import React from "react";
import Link from "next/link";

// React Icons
import { BiSend } from "react-icons/bi";

const Subscription = () => {
    return (
        <div className="py-10 px-4 mt-0 grid grid-cols-1 place-items-center gap-0 lg:grid-cols-2 md:mt-32">
            <div className="mb-16 lg:mb-0">
                <img src="svg/delivery.svg" alt="Personal-Email" width="400px" max-width="100%" />
            </div>

            <div className="text-center lg:mb-0 lg:text-left">
                <h1 className="text-4xl font-bold leading-12 md:text-5xl">
                    We Deliver as fast as you expect
                </h1>
                <p className="my-6 text-gray-600 leading-8">
                    Let's us know how can we improve our services.
                </p>
                <div className="flex flex-col justify-start items-center gap-2 max-w-xl w-100 m-auto lg:m-0 md:flex-row">
                    <input type="email" placeholder="eatbittech@gmail.com" className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-green-500" />
                    <Link href="" legacyBehavior>
                        <a className="w-full flex justify-center items-center gap-2 m-auto py-3 px-4 bg-primary text-white text-sm font-bold border border-green-500 rounded-md ease-in-out duration-150 s00hadow-slate-6 hover:bg-white hover:text-black lg:m-0 md:w-max md:px-6 md:w-20" title="Subscribe">
                            <span>Send</span>
                            <BiSend />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Subscription;