import React, { useState, useEffect } from 'react';
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import Register from 'components/Resturant-Regsiter';
// React Icons
import { MdOutlineDeliveryDining, MdOutlineShoppingCart } from "react-icons/md";
import AvatarCustom from '../CustomAvatar';
import { Button } from '@mantine/core';


const RestNavbar = () => {

    const [opened, setOpened] = useState(false);
    let [navOpen, setNavbOpen] = useState(false);
    const [account, setAccount] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      setAccount(window.ethereum._state.accounts[0]);
    }
  }, []);

    const closeNav = () => {
        if (!navOpen) {
            setNavbOpen(navOpen);
            navOpen = true;
        } else {
            setNavbOpen(!navOpen);
            navOpen = false;
        }
    }
    return (
        <>
            <nav className="pt-0 flex justify-between items-center lg:pt-2">
                <div className="z-50">
                    <h2 title="EatBit - Your Favourite Food Delivery Partner">
                        <Link href="/" legacyBehavior>
                            <a className="flex flex-col justify-center items-center gap-0">
                                <img src="/svg/logo.svg" alt="logo" style={{ height: "130px" }} />
                            </a>
                        </Link>
                    </h2>
                </div>

                <div>
                    <ul className={`menu hidden absolute left-0 top-0 px-3 pb-6 pt-20 bg-black w-full sm:w-unst sm:bg-transparent sm:p-0 sm:static sm:flex sm:justify-center sm:items-center sm:gap-4 ${styles.menu} ${navOpen ? `${styles.open}` : ""}`}>
                        <li className="text-white mb-3 font-semibold ease-in-out duration-150 hover:text-black w-max sm:mb-0 sm:text-black text-lg" title="Home" onClick={() => closeNav()}>
                            <Link href="/resturant">Home</Link>
                        </li>
                        <li className="cursor-pointer text-white mb-3 font-semibold ease-in-out duration-150 hover:text-black w-max sm:mb-0 sm:text-black text-lg" title="Home" onClick={() => closeNav()}>
                            <div onClick={() => { setOpened(true) }} >Register</div>
                        </li>
                        <li className="text-white mb-3 font-semibold ease-in-out duration-150 hover:text-black w-max sm:mb-0 sm:text-black text-lg" title="Menu" onClick={() => closeNav()}>
                            <Link href="/resturant/add-items">Menu</Link>
                        </li>
                        <li className="text-white font-semibold ease-in-out duration-150 hover:text-black sm:text-black text-lg" title="Contact Us" onClick={() => closeNav()}>
                            <Link href="/resturant/orders">Orders</Link>
                        </li>
                    </ul>
                </div>

                <div className="w-[13%] flex justify-around">


                {account ? <Button style={{ background: "#22C55E" }}>Connected</Button> : <Button style={{ background: "#ff7d7d" }} onClick={() => {setAccount(connectWallet);}}>Connect Wallet</Button>}

                </div>

                <div
                    className={`z-50 flex flex-col justify-center items-center bg-gray-100 h-9 w-10 rounded-md sm:hidden ${styles.hamburger} ${navOpen ? `${styles.open}` : ""}`}
                    onClick={() => setNavbOpen(!navOpen)}>
                    <span className="h-0.5 w-7 bg-black mb-1.5 ease-in-out duration-150"></span>
                    <span className="h-0.5 w-7 bg-black mb-1.5 ease-in-out duration-150"></span>
                    <span className="h-0.5 w-7 bg-black ease-in-out duration-150"></span>
                </div>


            </nav>
            {opened && <Register opened={opened} setOpened={setOpened} />}

        </>

    )
}

export default RestNavbar;
