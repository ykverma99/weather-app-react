import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../store/slice/CartSlice";

const Home = () => {
  const [product, setproduct] = useState([]);

  const cart = useSelector((state) => state.cart.total);
  
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setproduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col   items-center h-96 gap-6">
      <div className="space-x-3 flex">
        <p>Home</p>
        <p>Product</p>
        <p>About</p>
        <p>
          <span>Cart </span>
          <span>{cart}</span>
        </p>
      </div>
      <div className="grid grid-cols-5">
        {product.map((elm) => (
          <Product
            key={elm.id}
            title={elm.title}
            src={elm.image}
            onClick={() => dispatch(addCart(elm))}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
