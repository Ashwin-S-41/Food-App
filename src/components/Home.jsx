import React from "react";
import MenuItem from "./MenuItem";
import Welcome from "./Welcome";

const Home = ({ handleClick, cart }) => {
  return (
    <div>
      <Welcome />
      <MenuItem handleClick={handleClick} cart={cart} />
    </div>
  );
};

export default Home;
