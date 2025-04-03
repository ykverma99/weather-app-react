import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import { useSelector } from "react-redux";

const Product = () => {
  const todos = useSelector((state) => state.task.tasks);
  console.log(todos);
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h1 className="text-4xl font-bold">Todo Task</h1>
      <TodoInput />
      <div className="w-md px-2">
        <h2 className="text-2xl font-medium">
          {todos?.length ? "Todo Items" : "Add Items"}
        </h2>
      </div>
      {todos.map((elm) => (
        <TodoItem key={elm.id} item={elm.name} id={elm.id} done={elm.done} />
      ))}
    </div>
  );
};

export default Product;
