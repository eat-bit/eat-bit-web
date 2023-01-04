import { Accordion, Group, Avatar, Text } from "@mantine/core";
import dynamic from "next/dynamic";
// Components
const Navbar = dynamic(() => import("components/Navbar"), { ssr: false });
const Resturant = dynamic(() => import("components/ResturantUI"), {
  ssr: false,
});

function Menu() {
  return (
    <div className="p-3 max-w-7xl m-auto">
      <Navbar />
      <div>
        <div className="title-banner my-6 py-24 bg-primary text-center rounded-lg sm:my-10">
          <h1 className="text-3xl font-bold text-white mx-6 md:text-5xl sm:text-4xl">
            Select your meal
          </h1>
        </div>
      </div>
      <Resturant />
    </div>
  );
}

export default Menu;
