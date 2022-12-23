import React from "react";
import Link from "next/link";

// React Icons
import { MdOutlineDeliveryDining } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { BsTelephonePlus, BsTwitter } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="mt-20 mb-12 grid place-items-center grid-cols-1 gap-4 lg:grid-cols-4 md:grid-cols-2 sm:mt-32">
                <div className="text-center md:text-left">
                    <h2 title="EatBit - Your Favourite Food Delivery Partner">
                        <Link href="/" legacyBehavior>
                            <a className="flex flex-col justify-center items-center gap-0 w-max m-auto md:m-0">
                                <MdOutlineDeliveryDining className="text-5xl text-primary" />
                                <span className="text-xl text-black font-semibold">EatBit</span>
                            </a>
                        </Link>
                    </h2>
                    <p className="my-6 text-gray-600 text-sm text-justify sm:text-center md:text-left leading-8">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        This last been the industrys standard dummy text ever since the 1500s,
                    </p>
                    <h5 className="font-semibold text-sm text-gray-600">
                        &copy; 2020 - 2022 - EatBit. All Rights Reserved.
                    </h5>
                </div>

                <div className="text-center mb-4 lg:text-left lg:mb-0">
                    <h2 className="font-semibold text-md">Quick Links</h2>
                    <ul className="mt-4">
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="About Us">
                            <Link href="/about-us">About Us</Link>
                        </li>
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="Menu">
                            <Link href="/menu">Menu</Link>
                        </li>
                        <li className="text-sm font-semibold text-gray-600" title="Contact Us">
                            <Link href="/contact-us">Contact Us</Link>
                        </li>
                    </ul>
                </div>

                <div className="text-center mb-4 lg:text-left lg:mb-0">
                    <h2 className="font-semibold text-md">Contact</h2>
                    <ul className="mt-4">
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="Address">
                            <a className="flex items-center gap-2">
                                <GoLocation />
                                <span>Delhi, India</span>
                            </a>
                        </li>
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="Phone">
                            <a className="flex items-center gap-2">
                                <BsTelephonePlus />
                                <span>+91 9817281850</span>
                            </a>
                        </li>
                        <li className="text-sm font-semibold text-gray-600" title="Email">
                            <a className="flex items-center gap-2">
                                <AiOutlineMail />
                                <span>eatbittech@gmail.com</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="text-center mb-4 lg:text-left lg:mb-0">
                    <h2 className="font-semibold text-md">Follow Us On</h2>
                    <ul className="mt-4">
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="Facebook">
                            <Link href="" legacyBehavior>
                                <a className="flex items-center gap-2">
                                    <FaFacebookF />
                                    <span>/EatBit</span>
                                </a>
                            </Link>
                        </li>
                        <li className="text-sm mb-4 font-semibold text-gray-600" title="Twitter">
                            <Link href="" legacyBehavior>
                                <a className="flex items-center gap-2">
                                    <BsTwitter />
                                    <span>/EatBit</span>
                                </a>
                            </Link>
                        </li>
                        <li className="text-sm font-semibold text-gray-600" title="Instagram">
                            <Link href="" legacyBehavior>
                                <a className="flex items-center gap-2">
                                    <FaInstagram />
                                    <span>/EatBit</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Footer;
