import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
// Components
const Navbar = dynamic(() => import('components/Navbar'), { ssr: false });
import Footer from '../../../src/components/Footer';

// Scroll To Top Hook
import useScrollTop from '../../../src/Hooks/useScrollTop';

import { List, ThemeIcon } from '@mantine/core';
import { Star } from 'tabler-icons-react';

export default function About() {

  useScrollTop();

  return (
    <div>
      <Head>
        <title>About Us - EatBit</title>
        <meta name="description" content="Responsive, clean and open source food delivery app using Next.js & Tailwind CSS." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="p-3 max-w-7xl m-auto">
        <Navbar />
        <div>
          <div className="title-banner my-6 py-24 bg-primary text-center rounded-lg sm:my-10">
            <h1 className="text-3xl font-bold text-white mx-6 md:text-5xl sm:text-4xl">
              A Strong Services Providing
            </h1>
          </div>
          <h1 className="mt-8 text-3xl font-bold text-black text-center sm:text-left sm:text-4xl">
            Who are we?
          </h1>
          <p className="my-5 text-gray-600 text-md leading-9 text-justify sm:text-left p-3">
            <div className="w-[90%]">
              EatBit enables you to order food from restaurants/eateries in your area directly by paying the restaurants. There is no middleman involved in this process.
              The restaurants come to the application and register themselves with their name and other details.
              <List
                spacing="xs"
                center
                icon={
                  <ThemeIcon color="red" size={24} radius="xl">
                    <Star size={16} />
                  </ThemeIcon>
                }
              >
                <List.Item>
                  Restaurants can add their menu items, prices ,images and description.
                </List.Item>

                <List.Item>
                  The customers can browse through the menu and add their favorite items to the cart.
                </List.Item>

                <List.Item>
                  The customers pays the restaurants directly for the food they order with cryptocurrency.
                </List.Item>

                <List.Item>
                  The restaurants can view the orders placed by the customers and accept or reject them.
                </List.Item>

                <List.Item>
                  If the restaurant accepts the order, the order is confirmed and the customer receives a notification.
                </List.Item>

                <List.Item>
                  Else, if the order is cancelled customer is provided with an instant refund from the smart contract.
                </List.Item>

                <List.Item>
                  The food is thenn prepared and delivered to the customer.
                </List.Item>

                <List.Item>
                  At the time of delivery, the customer has to accept the order completion in the application with same account he used to place the order.
                </List.Item>
              </List>
            </div>


          </p>
          <div className="my-6 grid place-items-center grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2 sm:place-items-start">
            <div>
              <img src="https://bit.ly/3d7jcex" className="rounded-md" alt="Restaurant-Image" />
            </div>
            <div>
              <img src="https://bit.ly/3zyjWAR" className="rounded-md" alt="Restaurant-Image" />
            </div>
            <div>
              <img src="https://bit.ly/3Qq64j3" className="rounded-md" alt="Restaurant-Image" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}
