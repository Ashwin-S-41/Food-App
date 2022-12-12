import React from "react";
import { useState } from "react";

const FoodCard = ({ item, handleClick, cart }) => {
  const { title, price, img, id } = item;
  const [Added, setAdded] = useState(false);

  console.log(cart);
  return (
    <div>
      <div className="h-[280px] w-[200px] items-center justify-center mb-4 rounded-2xl p-3 bg-[#ee941e] scrollbar-hide">
        <div className="h-[60%]  overflow-hidden bg-white rounded-xl flex justify-center items-center p-5">
          <img className="rounded-full" src={img} width="500" height="500" />
        </div>
        <div className="w-[170 px] mt-2 font-Poppins font-semibold  text-center text-white">
          {title}
        </div>
        <div className="text-center text-white font-Poppins font-medium">
          Price : {price} Rs
        </div>
        <button
          className=" mt-2 rounded-xl bg-green-600 w-full h-8 flex justify-center items-center text-center text-white font-Poppins font-medium"
          onClick={() => {
            handleClick(item);
            setAdded(true);
          }}
        >
          {Added != true ? (
            <div>Add to Cart +</div>
          ) : (
            <div className="text-yellow-400">Added to Cart !</div>
          )}
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
