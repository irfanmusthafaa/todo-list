import React from "react";

export const ButtonDeleteAll = ({ clickedDeleteAll, className }) => {
  return (
    <>
      <button
        onClick={clickedDeleteAll}
        className={`w-[45%] rounded-md p-3 bg-gradient-to-r from-red-500 to-red-700 text-white hover:opacity-75 ${className}`}
      >
        Delete All Task
      </button>
    </>
  );
};
