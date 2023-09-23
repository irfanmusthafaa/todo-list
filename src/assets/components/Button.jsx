import React from "react";

export const Button = (props) => {
  // const { className, text } = props;
  return (
    <>
      <button className={`rounded-md p-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:opacity-75 ${props.className}`}>
        {props.text}
      </button>
    </>
  );
};
