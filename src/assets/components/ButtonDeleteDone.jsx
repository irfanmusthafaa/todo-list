import React from "react";

export const ButtonDeleteDone = ({ className, clickedDeleteDone }) => {
  return (
    <>
      <button
        onClick={clickedDeleteDone}
        className={`w-[45%] rounded-md p-3 bg-gradient-to-r from-red-500 to-red-700 text-white hover:opacity-75 ${className}`}
      >
        Delete Done Task
      </button>
    </>
  );
};
