import React, { useContext, useState } from "react";
import Head from 'next/head';
import dynamic from 'next/dynamic';
// Components
const Navbar = dynamic(() => import('components/Navbar'), { ssr: false });
import Notify from 'components/Notification/index.js';

import Hero from 'components/Hero';
import FeaturedFood from 'components/Featured-Food';
import ServicesBanner from "components/Services-Banner";
import AboutUsBanner from "components/AboutUs-Banner";
import Subscription from "components/Subscription";
import Footer from "components/Footer";

// Scroll To Top Hook
import useScrollTop from 'Hooks/useScrollTop';

import CartContext from "Context/cart/cartContext.js";




export default function Home() {

  const { Not } = useContext(CartContext);


  useScrollTop();

  return (



    <div>
      <Head>
        <title>EatBit</title>
        <meta name="description" content="Responsive, clean and open source food delivery app using Next.js & Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-3 max-w-7xl m-auto">
        <Navbar />
        <Hero />
        {/* <CustomersBanner /> */}
        <div className="flex justify-end">
          {Not && <Notify />}

        </div>

        <FeaturedFood />
        <ServicesBanner />
        <AboutUsBanner />
        <Subscription />
        <Footer />
      </div>
    </div>


  )
}
