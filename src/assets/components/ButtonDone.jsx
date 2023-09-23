import React from "react";

export const ButtonDone = ({ clickedDone, className }) => {
  return (
    <>
      <button onClick={clickedDone} className={`w-[30%] rounded-md p-3 bg-[#35A29F] text-white hover:opacity-75 ${className}`}>
        Done
      </button>
    </>
  );
};
