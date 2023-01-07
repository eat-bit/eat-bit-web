import React from "react";
import Head from 'next/head';
import dynamic from "next/dynamic";
// Components
const RestNavbar = dynamic(() => import("components/Resturant-Navbar"), {
    ssr: false,
  });

const RestHero = dynamic(() => import("components/Resturant-Hero"), {
    ssr: false,
  });

import Footer from "components/Footer";

// Scroll To Top Hook
import useScrollTop from 'Hooks/useScrollTop';

export default function Home() {

    useScrollTop();

    return (
        <div>
            <Head>
                <title>EatBit</title>
                <meta name="description" content="Responsive, clean and open source food delivery app using Next.js & Tailwind CSS." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="p-3 max-w-7xl m-auto">
                <RestNavbar />
                <RestHero />
                {/* <CustomersBanner /> */}
                <Footer />
            </div>
        </div>


    )
}
