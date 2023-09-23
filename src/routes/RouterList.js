import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Todo } from "../pages/Todo";

export const RouterList = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
