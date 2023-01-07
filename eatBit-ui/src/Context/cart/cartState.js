import CartContext from "./cartContext";
import CartDispatchContext from "./cartDispatchContext";
import { data } from "components/Featured-Food/data/data";
import { useState } from "react";




const CartState = ({ children }) => {

  const [product, setProduct] = useState(data)
  // console.log("pof", product)
  const [cart, setCart] = useState([]);

  const increment = (prod) => setCart((prev) => {
    return [...prev, { ...prod, qty: 1 }];
  });

  const decrement = (itm) => setCart((prev) => {
    return prev.filter((c) => c.itemId !== itm.itemId)
  })

  const increaseTheCartQty = (itm) => setCart((prev) => {
    const index = prev.findIndex(prod => {
      return prod.itemId === itm.itemId;
    })
    prev[index].qty += 1;
    return [...prev];
  })

  // filter out the element ...prod , prod,qty + 1

  const decreaseTheCartQty = (itm) => setCart((prev) => {
    const index = prev.findIndex(prod => {
      return prod.itemId === itm.itemId;
    })

    if (prev[index].qty > 1)
      prev[index].qty -= 1;
    else if (prev[index].qty == 1) {
      return prev.filter(c => c.itemId !== itm.itemId)
    } 
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
