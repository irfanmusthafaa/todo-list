import React from "react";

export const ButtonAll = ({ clickedAll, className }) => {
  return (
    <>
      <button onClick={clickedAll} className={` w-[30%] rounded-md p-3 bg-[#35A29F] text-white hover:opacity-75 ${className}`}>
        All
      </button>
    </>
  );
};
