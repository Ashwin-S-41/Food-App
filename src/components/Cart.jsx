import React, { useState, useEffect } from "react";
import QRCode from "react-qr-code";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const [paymentStatus, setPaymentStatus] = useState(false);
  const [paymentId, setPaymentId] = useState("");

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    handlePrice();
  });
  const payment = () => {
    var options = {
      key: import.meta.env.VITE_RAZOR_PAY_KEY,
      key_secret: import.meta.env.VITE_RAZOR_PAY_KEY_SECRET,
      amount: price * 100,
      currency: "INR",
      name: "Food App",
      description: "for testing purpose",
      handler: function (response) {
        setPaymentId(response.razorpay_payment_id);
        setPaymentStatus(true);
      },
      prefill: {
        name: "Ashwin",
        email: "ashwinrockz321@gmail.com",
        contact: "9443455275",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };
  if (cart.length > 0 && paymentStatus == false) {
    // Cart
    return (
      <div className="px-5">
        <div className=" w-full  flex justify-center items-center rounded-xl mb-5 bg-black text-white h-12 text-lg">
          <span>Total Price of your Cart Rs : {price}</span>
        </div>
        {cart.map((item) => (
          <div
            className="flex flex-row p-2 h-28 justify-between items-center rounded-xl bg-green-600 my-4"
            key={item.id}
          >
            <div className="bg-white  rounded-lg overflow-hidden">
              <img className="w-24 h-24" src={item.img} alt="" />
            </div>
            <div className="text-white flex flex-col h-full justify-center space-y- text-base font-Poppins">
              <p>{item.title}</p>
              <p>Price : {item.price} Rs</p>
              <p>Total : {item.price * item.amount} Rs</p>
            </div>
            <div className="flex flex-col h-full justify-evenly items-center">
              <div className="bg-[#ee941e] px-1 w-20 h-8 flex justify-evenly items-center rounded-lg">
                <button
                  className="w-[30%] text-center rounded-md bg-white text-red-600"
                  onClick={() => handleChange(item, -1)}
                >
                  -
                </button>
                <div className="text-white text-lg text-center w-[40%] ">
                  {item.amount}
                </div>
                <button
                  className="text-green-600 w-[30%] text-center rounded-md bg-white "
                  onClick={() => handleChange(item, 1)}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleRemove(item.id)}
                className="flex justify-center  bg-red-500 w-full h-8 rounded-lg items-center"
              >
                <div className="text-white">Remove</div>
              </button>
            </div>
          </div>
        ))}
        <div className=" w-full flex justify-center items-center rounded-xl mb-5 bg-black text-white h-12 text-lg">
          <span>Total Price of your Cart Rs : {price}</span>
        </div>
        <div
          onClick={payment}
          className=" w-full cursor-pointer flex justify-center items-center rounded-xl mb-5 bg-black text-white h-12 text-lg"
        >
          <span>Pay</span>
        </div>
        {paymentStatus == true && (
          <div className="text-black bg-red w-screen">
            {paymentStatus == true ? "Success" : "Failure"}
            {paymentId}{" "}
          </div>
        )}
      </div>
    );
  } else if (cart.length > 0 && paymentStatus == true) {
    // Payment Success
    return (
      <div className="flex  h-[82%] w-full justify-center items-center">
        <div className=" flex flex-col h-[80%] w-[80%] p-8 rounded-xl justify-center items-center  bg-[#77e76d]  ">
          <div className="flex flex-col mb-3 justify-center items-center">
            <QRCode bgColor="#77e76d" size={200} value={paymentId} />
            <div className="mt-5 text-lg font-Poppins font-semibold">
              {paymentStatus == true && "Payment Successful !"}
            </div>
            <div className="text-sm font-Poppins">Order Id : {paymentId}</div>
            <div className="text-xs font-Poppins">
              Status : Food Is Being Prepared
            </div>
          </div>

          <div className="w-full">
            {cart.map((item) => (
              <div className="flex w-full  items-center  justify-evenly ">
                <div className=" w-[50%] text-sm font-Poppins font-semibold">
                  {item.title}
                </div>

                <div className="pl-5 flex-1 text-sm text-center font-Poppins font-semibold">
                  X
                </div>
                <div className="flex-1 text-sm font-Poppins text-end font-semibold">
                  {item.amount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    // Empty Cart
    return (
      <div className="flex h-[82%]  w-full justify-center items-center">
        <div>The Cart is empty!</div>
      </div>
    );
  }
};

export default Cart;
