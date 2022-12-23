import { Button, Loader, Pagination, Skeleton } from "@mantine/core";
import {
    createStyles,
    Modal,
    useMantineTheme,
} from "@mantine/core";
import { Help } from "tabler-icons-react";

import Link from "next/link";

import { useEffect, useState } from "react";

import RestNavbar from 'components/Resturant-Navbar';

const useStyles = createStyles((theme) => ({
    rowSelected: {
        backgroundColor: "bg-primary",
    },
}));
const Register = ({ opened, setOpened }) => {

    const theme = useMantineTheme();

    // const [opened, setOpened] = useState(true);
    const [restData, setRestData] = useState({
        "name": "",
        "ptaa": "",
        "description": ""
    })

    return (
        <>
            <div className="w-[80%] h-[80%] bg-gradient-to-r from-primary-500 to-blue-500">
                <Modal
                    centered
                    overlayColor={
                        theme.colorScheme === "dark"
                            ? theme.colors.dark[9]
                            : theme.colors.gray[2]
                    }
                    withCloseButton={false}
                    overlayOpacity={0.55}
                    overlayBlur={3}
                    opened={opened}
                    onClose={() => setOpened(false)}
                    size="lg"
                >
                    <div className="cards w-sm" style={{ background: "var(--pastel-color)" }}>
                        <h3 className="text-xl text-gray-900 dark:text-white mb-5">
                            Add Restaurant
                        </h3>
                        <div className=" items-center">
                            <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                                Resturant Name
                            </label>

                            <input
                                type="text"
                                className="form-control mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleText0"
                                placeholder="First & Last Name"

                                value={restData.name}
                                onChange={(e) => setRestData((old) => ({ ...old, name: e.target.value }))}
                            />
                        </div>
                        {/* 
                    <div className="items-center mt-3">

                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
                        <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" />

                    </div> */}


                        <div className=" items-center mt-3">
                            <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                                Description
                            </label>

                            <textarea
                                type="text"
                                className="form-control mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleText0"
                                placeholder="Description"

                                value={restData.description}
                                onChange={(e) => setRestData((old) => ({ ...old, description: e.target.value }))}
                            />
                        </div>

                        <div className=" items-center mt-3">
                            <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                                Address
                            </label>

                            <input
                                type="text"
                                className="form-control mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                id="exampleText0"
                                placeholder="address"

                                value={restData.ptaa}
                                onChange={(e) => setRestData((old) => ({ ...old, ptaa: e.target.value }))}
                            />
                        </div>
                        {/* <div className=" items-center mt-3">
                        <label className="mb-2 basis-1/5 block text-sm font-medium text-gray-900 ">
                            Phone
                        </label>

                        <input
                            type="number"
                            className="form-control mb-2 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleText0"
                            placeholder="Phone"

                        // value={userData.phone}
                        // onChange={(e) => setRestData((old) => ({ ...old, phone: e.target.value }))}
                        />
                    </div> */}



                        <div className="flex items-center space-x-2 mt-5 justify-end">

                            <Link href="/resturant/add-items" legacyBehavior>
                                <a>
                                    <button
                                        // onClick={() => addRestaurant(restData.name, restData.description, restData.ptaa)}
                                        className="bg-primary text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                                    // style={{ background: loader ? "var(--secondary-color)" : "var(--primary-color)" }}

                                    >
                                        Add
                                    </button>
                                </a>
                            </Link>


                            {/* <button
                            className="bg-mainRed text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 "
                        // onClick={handleCancelModal}
                        >
                            Cancel
                        </button> */}
                        </div>
                    </div>
                </Modal>
            </div>
        </>

    );
};

export default Register;
