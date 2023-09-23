import React from "react";
import AddIcon from "../icons/bars.svg";

export const AddForm = ({ newTask, setNewTask, addTask }) => {
  return (
    <>
      {/* Add Task */}
      {/* <div className="row">
        <div className="col">
          <input value={newTask} onChange={(e) => setNewTask(e.target.value)} className="form-control form-control-lg" />
        </div>
        <div className="col-auto">
          <button onClick={addTask} className="btn btn-lg btn-success">
            Add Task
          </button>
        </div>
      </div>
      <br /> */}

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <img src={AddIcon} className="w-4 h-4 text-gray-500 dark:text-gray-400" alt="icon add" />
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          onClick={addTask}
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-[#35A29F] hover:opacity-75  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Task
        </button>
      </div>
    </>
  );
};
