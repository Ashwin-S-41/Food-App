import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };
  return (
    <div className="flex h-screen flex-col">
      <Header setShow={setShow} size={cart.length} />
      {show ? (
        <Home handleClick={handleClick} cart={cart} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </div>
  );
}

export default App;
