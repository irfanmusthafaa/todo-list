import React, { useState, useEffect } from "react";
import datas from "../data/data.json";
import { InputSearch } from "../assets/components/InputSearch";
import { AddForm } from "../assets/components/AddForm";
import { TodoList } from "../assets/components/TodoList";
import { UpdateForm } from "../assets/components/UpdateForm";
import { ButtonDeleteAll } from "../assets/components/ButtonDeleteAll";
import { ButtonDeleteDone } from "../assets/components/ButtonDeleteDone";

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");
  const [search, setSearch] = useState("");
  const [dataAwal, setDataAwal] = useState([]);

  useEffect(() => {
    setTodos(datas);
    setDataAwal(datas);
  }, []);

  // Add task
  ///////////////////////////
  const addTask = () => {
    if (newTask) {
      let num = todos.length + 1;
      let newEntry = { id: num, task: newTask, complete: false };
      setTodos([...todos, newEntry]);
      setNewTask("");
    }
  };

  // Delete task
  ///////////////////////////
  const deleteTask = (id) => {
    let remove = todos.filter((todo) => todo.id !== id);
    setTodos(remove);
  };

  // Mark task as done or completed
  ///////////////////////////
  const markDone = (id) => {
    let newTask = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });

    setTodos(newTask);
  };

  // Cancel update
  ///////////////////////////
  const cancelUpdate = () => {
    setUpdateData("");
  };

  // Change task for update
  ///////////////////////////
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      task: e.target.value,
      complete: updateData.complete ? true : false,
    };
    setUpdateData(newEntry);
  };

  // Update task
  ///////////////////////////
  const updateTask = () => {
    let filterRecords = [...todos].filter((todo) => todo.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData];
    setTodos(updatedObject);
    setUpdateData("");
  };

  //delete done task
  const deleteDoneTask = () => {
    const donetask = todos.filter((todo) => !todo.complete);
    setTodos(donetask);
  };

  //delete all task
  const deleteAllTask = () => {
    setTodos([]);
  };

  //search
  const filterData = (e) => {
    setTodos(dataAwal.filter((valueFilter) => valueFilter.task.toLowerCase().includes(search.toLowerCase())));
  };

  return (
    <div className="w-[720px]  bg-[#f0f0f0] mt-10 rounded-3xl pb-5">
      <div className="w-[80%]  mx-auto mt-4 py-10">
        <h1 className="text-center mb-5 text-[#213555] font-bold text-2xl ">Todo Search</h1>
        <InputSearch setSearch={setSearch} filterData={filterData} />
      </div>

      <div className="w-[80%]  mx-auto mt-4 ">
        <h1 className="text-center mb-5 text-[#213555] font-bold text-2xl ">Todo List</h1>
        {updateData && updateData ? (
          <UpdateForm updateData={updateData} changeTask={changeTask} updateTask={updateTask} cancelUpdate={cancelUpdate} />
        ) : (
          <AddForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
        )}

        {/* Display ToDos */}
        <div className="mb-[3rem]">
          <TodoList todos={todos} deleteTask={deleteTask} markDone={markDone} setUpdateData={setUpdateData} />
        </div>
        <div className="flex justify-around gap-5 mb-[2rem]">
          <ButtonDeleteDone clickedDeleteDone={() => deleteDoneTask()} />
          <ButtonDeleteAll clickedDeleteAll={() => deleteAllTask()} />
        </div>
      </div>
    </div>
  );
};
