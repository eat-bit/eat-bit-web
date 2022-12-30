import React from "react";
import { addItem } from "api";

export default function AddItemButton(props) {
  return (
    <button
      onClick={() =>
        addItem(
          setItem.name,
          setItem.price,
          setItem.description,
          setItem.imageURL
        )
      }
      className="bg-primary text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      // style={{ background: loader ? "var(--secondary-color)" : "var(--primary-color)" }}
    >
      Add
    </button>
  );
}
