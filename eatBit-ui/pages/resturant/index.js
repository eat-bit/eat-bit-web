import React from "react";
import Head from 'next/head';

// Components
import RestNavbar from 'components/Resturant-Navbar';
import RestHero from 'components/Resturant-Hero';
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
