import React from "react";

const Welcome = () => {
  return (
    <div className="p-5 m-5 h-44  relative rounded-xl bg-green-600 flex flex-col justify-center items-start">
      <div className=" ">
        <div className="text-3xl  text-white font-bold font-Poppins">
          Choose your
        </div>
        <div className="text-3xl text-white font-bold font-Poppins">
          favourite food
        </div>
        <div className="text-3xl  text-white font-bold font-Poppins">
          with Rich{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 ">
            {" "}
            Flavours...
          </span>
        </div>
      </div>
      <div className="absolute top-7 right-5  z-5">
        <img className="w-20 h-20 opacity-40" src="burgir.png"></img>
      </div>
    </div>
  );
};

export default Welcome;
