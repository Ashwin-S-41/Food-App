import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Header = ({ setShow, size }) => {
  return (
    <div className="w-screen h-[8%] sticky top-0 z-30 bg-white  flex justify-between items-center">
      <div
        className="text-green-800 text-xl cursor-pointer p-5 font-bold"
        onClick={() => {
          setShow(true);
        }}
      >
        Food App
      </div>
      <div
        className="p-5 mr-5 relative rounded-xl "
        onClick={() => {
          setShow(false);
        }}
      >
        {size > 0 && (
          <div className="text-white bg-red-500 z-5 flex absolute top-4 right-3 justify-center items-center rounded-full w-4 h-4">
            <div className="text-xs">{size}</div>
          </div>
        )}
        <ShoppingCartIcon className="w-8 h-8 cursor-pointer hover:text-[#464242]" />
      </div>
    </div>
  );
};

export default Header;
