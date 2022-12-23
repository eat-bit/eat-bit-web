import CartContext from "./cartContext";
import CartDispatchContext from "./cartDispatchContext";
import { data } from "components/Featured-Food/data/data";
import { useState } from "react";




const CartState = ({ children }) => {

  const [product, setProduct] = useState(data)
  console.log("pof", product)
  const [cart, setCart] = useState([]);

  const increment = (prod) => setCart((prev) => {
    return [...prev, { ...prod, qty: 1 }];
  });

  const decrement = (itm) => setCart((prev) => {
    return prev.filter((c) => c.id !== itm.id)
  })

  const increaseTheCartQty = (itm) => setCart((prev) => {
    const index = prev.findIndex(prod => {
      return prod.id === itm.id;
    })
    prev[index].qty += 1;
    return [...prev];
  })

  // filter out the element ...prod , prod,qty + 1

  const decreaseTheCartQty = (itm) => setCart((prev) => {
    const index = prev.findIndex(prod => {
      return prod.id === itm.id;
    })
    if (prev[index].qty > 0)
      prev[index].qty -= 1;
    return [...prev];
  })

  const [Not, setNot] = useState(false);
  const [type, setType] = useState(false);


  return (
    <CartContext.Provider value={{ product, cart, increment, decrement, increaseTheCartQty, decreaseTheCartQty, Not, setNot, type, setType }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
