import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../store/slice/TaskSlice";

const TodoInput = () => {
  const [value, setvalue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim().length === 0) {
      alert("Enter the input");
      setvalue("");
      return;
    }

    dispatch(addTask({ tasks: value }));

    setvalue("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center gap-5">
      <input
        type="text"
        placeholder="Add Todo"
        className="px-2 w-xs h-12 border rounded"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
      />
      <button
        type="submit"
        className="text-center h-12 bg-blue-500 w-24 rounded text-lg font-semibold text-white"
      >
        Add
      </button>
    </form>
  );
};

export default TodoInput;
