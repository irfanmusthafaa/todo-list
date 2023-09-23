import React from "react";

export const ButtonTodo = ({ clickedTodo, className }) => {
  return (
    <>
      <button onClick={clickedTodo} className={`w-[30%] rounded-md p-3 bg-[#35A29F] text-white hover:opacity-75 ${className}`}>
        Todo
      </button>
    </>
  );
};
