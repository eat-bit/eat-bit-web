import React, { useEffect, useState } from 'react';
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import { connectWallet } from "api";
// React Icons
import { MdOutlineDeliveryDining, MdOutlineShoppingCart } from "react-icons/md";
import AvatarCustom from '../CustomAvatar';
import { Button } from '@mantine/core';

const Navbar = () => {
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
    <nav className="pt-0 flex justify-between items-center lg:pt-2">
      <div className="z-50">
        <h2 title="EatBit - Your Favourite Food Delivery Partner">
          <Link href="/" legacyBehavior>
            <a className="flex flex-col justify-center items-center gap-0">
              {/* <MdOutlineDeliveryDining className="text-4xl text-primary" /> */}
              <img src="/svg/logo.svg" alt="logo" style={{ height: "130px" }} />
              {/* <span className={`text-lg text-black font-semibold ${styles.brand} ${navOpen ? `${styles.open}` : ""}`}>EatBit</span> */}
            </a>
          </Link>
        </h2>
      </div>

      <div>
        <ul className={`menu hidden absolute left-0 top-0 px-3 pb-6 pt-20 bg-black w-full sm:w-unst sm:bg-transparent sm:p-0 sm:static sm:flex sm:justify-center sm:items-center sm:gap-4 ${styles.menu} ${navOpen ? `${styles.open}` : ""}`}>
          <li className="text-white mb-3 font-semibold ease-in-out duration-150 hover:text-black w-max sm:mb-0 sm:text-black text-lg" title="Home" onClick={() => closeNav()}>
            <Link href="/customer">Home</Link>
          </li>
          <li className="text-white mb-3 font-semibold ease-in-out duration-150 hover:text-black w-max sm:mb-0 sm:text-black text-lg" title="About Us" onClick={() => closeNav()}>
            <Link href="/customer/about-us">About Us</Link>
          </li>
          <li className="text-white mb-3 font-semibold ease-in-out duration-150 hover:text-black w-max sm:mb-0 sm:text-black text-lg" title="Menu" onClick={() => closeNav()}>
            <Link href="/customer/menu">Menu</Link>
          </li>
          <li className="text-white font-semibold ease-in-out duration-150 hover:text-black sm:text-black text-lg" title="Contact Us" onClick={() => closeNav()}>
            <Link href="/customer/contact-us">Contact Us</Link>
          </li>
          <li className="text-white font-semibold ease-in-out duration-150 hover:text-black sm:text-black text-lg" title="Contact Us" onClick={() => closeNav()}>
            <Link href="/customer/orders">Orders</Link>
          </li>
        </ul>
      </div>

      <div className="w-[30%] flex justify-around">
        <div className="h-[40px] w-[40px]">
          <Link href="/customer/cart" legacyBehavior>
            <a>
              <div>
                <img src="/img/cart.png" />
              </div>
            </a>
          </Link>

        </div>

        {account ? <Button style={{ background: "#22C55E" }}>Connected</Button> : <Button style={{ background: "#ff7d7d" }} onClick={() => {setAccount(connectWallet);}}>Connect Wallet</Button>}
        {/* <AvatarCustom name={"S"} onClick={() => console.log("ola")} /> */}
      </div>

      <div
        className={`z-50 flex flex-col justify-center items-center bg-gray-100 h-9 w-10 rounded-md sm:hidden ${styles.hamburger} ${navOpen ? `${styles.open}` : ""}`}
        onClick={() => setNavbOpen(!navOpen)}>
        <span className="h-0.5 w-7 bg-black mb-1.5 ease-in-out duration-150"></span>
        <span className="h-0.5 w-7 bg-black mb-1.5 ease-in-out duration-150"></span>
        <span className="h-0.5 w-7 bg-black ease-in-out duration-150"></span>
      </div>

    </nav>
  )
}

export default Navbar;
