import { data } from "components/Resturant-Data/data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Demo from "components/Menu";
import { MdOutlineAddShoppingCart, MdStar } from "react-icons/md";

import { Group, Avatar, Text, Accordion } from '@mantine/core';



const Resturant = ({ }) => {


    const router = useRouter();

    const [restData, setRestData] = useState({});

    useEffect((() => {

        if (!router.isReady) return;

        const { id } = router.query;

        const rest = data.find((itm) => itm.id == id);
        console.log("ola", rest)

        setRestData(rest);

    }), [router.isReady])


    return (
        < div className="w-full h-full flex flex-col items-center">
            <div className="p-8">
                <div className="w-full bg-pastelBackground max-w-xl rounded overflow-hidden shadow-lg">
                    <img className="w-full" src={restData.image_url} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{restData.title}</div>
                        <p className="text-gray-700 text-base">
                            {restData.description}
                        </p>
                    </div>
                    <div className="flex justify-between px-6 pt-4 pb-2">
                        <h3 className="flex justify-between items-center text-xl font-semibold mb-1 text-white">
                            <span>${restData.address}</span>
                        </h3>

                        <span className="flex items-center gap-1">
                            {
                                Array.from({ length: restData.rating }).map((_, index) => (
                                    <MdStar key={index} />
                                ))
                            }
                        </span>
                    </div>

                </div>
            </div>
            <h1 className="text-xl text-black-700 py-5">Our Featured Foods</h1>

            <div className="w-[80%]">
                <Demo id={restData.id} />
            </div>
        </div >
    )
}

export default Resturant;





