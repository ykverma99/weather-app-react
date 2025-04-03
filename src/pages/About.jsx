import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center h-96 gap-6">
      <div className="space-x-3">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/product"}>Product</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </div>
      <h1 className="text-5xl font-semibold">About</h1>
    </div>
  );
};

export default About;
