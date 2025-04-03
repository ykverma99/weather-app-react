import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doneTask, removeTask } from "../store/slice/TaskSlice";

const TodoItem = ({ item, id, done }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center gap-5">
      <p
        className={`flex items-center bg-blue-200 w-xs h-12 px-2 font-medium rounded ${
          done ? "line-through" : ""
        }`}
      >
        {item}
      </p>
      <div className="flex w-24 h-12 gap-1 text-white font-bold">
        <button
          className="h-full w-1/2 bg-green-400 rounded-lg"
          onClick={() => dispatch(doneTask({ id }))}
        >
          S
        </button>
        <button
          className="h-full w-1/2 bg-red-400 rounded-lg cursor-pointer"
          onClick={() => dispatch(removeTask({ id }))}
        >
          D
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
