import "../src/styles/globals.css";
import CartState from "Context/cart/cartState.js";

function MyApp({ Component, pageProps }) {
  // setEatBitContract();
  return (
    <CartState>
      <Component {...pageProps} />;
    </CartState>
  )
}

export default MyApp;
