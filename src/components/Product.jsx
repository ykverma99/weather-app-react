import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Product = ({ title, src, onClick }) => {
  const { cart, add, sub } = useContext(CartContext);

  return (
    <div>
      <div className="h-40 w-40 rounded-2xl">
        <img src={src} alt="" className="h-full w-full object-cover" />
      </div>
      <div>
        <p className="truncate">{title}</p>
        <div className="inline-flex justify-around items-center w-20 border">
          <p className="cursor-pointer" onClick={() => sub()}>
            -
          </p>
          <p className="cursor-pointer">{cart}</p>
          <p className="cursor-pointer" onClick={() => add()}>
            +
          </p>
        </div>
        <br />
        <button
          className="bg-blue-400 p-3 px-7 text-white font-medium text-lg rounded my-1 cursor-pointer"
          onClick={onClick}
        >
          Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
