import React, { useState } from "react";
import { ButtonAll } from "./ButtonAll";
import { ButtonTodo } from "./ButtonTodo";
import { ListTasks } from "./ListTasks";
import { ButtonDone } from "./ButtonDone";

export const TodoList = ({ todos, deleteTask, markDone, setUpdateData, dataSearch }) => {
  const [type, setType] = useState("");

  // sort all
  ///////////////////////////
  const sortAll = () => {
    setType("");
  };

  // sort by done
  ///////////////////////////
  const sortDone = () => {
    setType("sortDone");
  };

  //sort by todo
  ///////////////////////////
  const sortTodo = () => {
    setType("sortTodo");
  };

  return (
    <>
      <div className="flex justify-center gap-5 my-5">
        <ButtonAll clickedAll={() => sortAll()} />
        <ButtonDone clickedDone={() => sortDone()} />
        <ButtonTodo clickedTodo={() => sortTodo()} />
      </div>
      {/* Jika Task tidak ada */}
      {todos && todos.length ? "" : <div className="my-10 text-center">"No Tasks..."</div>}
      {/* Type All */}
      {todos &&
        type === "" &&
        todos
          .sort((a, b) => {
            return b.id - a.id;
          })
          .map((todo) => <ListTasks key={todo.id} todo={todo} markDone={markDone} setUpdateData={setUpdateData} deleteTask={deleteTask} />)}
      {/* Type Done */}

      {todos &&
        type === "sortDone" &&
        todos
          .filter((todo) => todo.complete === true)
          .map((todo) => <ListTasks key={todo.id} todo={todo} markDone={markDone} setUpdateData={setUpdateData} deleteTask={deleteTask} />)}
      {/* Type Todo */}
      {todos &&
        type === "sortTodo" &&
        todos
          .filter((todo) => todo.complete === false)
          .map((todo) => <ListTasks key={todo.id} todo={todo} markDone={markDone} setUpdateData={setUpdateData} deleteTask={deleteTask} />)}
    </>
  );
};
