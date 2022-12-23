import React, { useContext, useState } from 'react';
import Link from "next/link";
import CartContext from 'Context/cart/cartContext.js';
// React Icons
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

// Featured Food Data
import FoodItem from '../Food-Item/index.js';

const FeaturedFood = ({ Not, setNot, setType }) => {


  const [product, setProduct] = useState([]);
  const obj = useContext(CartContext);
  console.log("obj", useContext(CartContext))

  setTimeout(() => {
    setProduct(obj.product)
  }, 3000)


  // console.log(data);

  return (
    <>

      <div className="mb-24 mt-16 pt-10">
        <div className="flex flex-col justify-center items-center gap-3 sm:flex-row sm:justify-between sm:gap-0">
          <h1 className="text-3xl font-bold sm:text-4xl">Our Featured Food</h1>
          <Link href="/customer/menu" legacyBehavior>
            <a className="flex justify-center items-center gap-2 text-primary" title="See All">
              <span>See all Food</span>
              <HiOutlineArrowNarrowRight />
            </a>
          </Link>
        </div>
        <div className="my-16 grid place-items-center grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2">
          {
            product ?
              product.slice(0, 3).map((food, index) =>
                <FoodItem food={food} key={index} />
              )
              : null
          }
        </div>
        <div className="flex justify-center items-center">
          {/* <Link href="/menu" legacyBehavior>
          <a className="flex justify-center items-center gap-2 text-primary font-semibold bg-white w-max m-auto py-2 px-4 border border-green-500 ease-in-out duration-150 hover:bg-primary hover:text-white rounded-md md:py-3 md:px-6" title="See All">
            <span>See all Food</span>
            <HiOutlineArrowNarrowRight />
          </a>
        </Link> */}
        </div>
      </div>
    </>

  )
}

export default FeaturedFood;