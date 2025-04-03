import React from "react";

const Box = ({ value, onClick }) => {
  return (
    <div
      className="cursor-pointer h-28 w-28 rounded-2xl bg-red-400 text-4xl font-bold flex justify-center items-center"
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Box;
