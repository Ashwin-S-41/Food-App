import React from "react";
import FoodCard from "./FoodCard";
import list from "../data";

const MenuItem = ({ handleClick, cart }) => {
  return (
    <div>
      <div className="text-xl font-Poppins font-medium pl-5">Menu</div>
      <div className="flex overflow-y-hidden w-screen space-x-3 px-5 overflow-x-scroll py-2 pb-0 ">
        {list.map((item) => (
          <FoodCard
            key={item.id}
            item={item}
            handleClick={handleClick}
            cart={cart}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuItem;
