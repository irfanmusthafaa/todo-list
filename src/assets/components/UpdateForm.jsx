import React from "react";
import AddIcon from "../icons/bars.svg";

export const UpdateForm = ({ updateData, changeTask, updateTask, cancelUpdate }) => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
          <img src={AddIcon} className="w-4 h-4 text-gray-500 dark:text-gray-400" alt="icon add" />
        </div>
        <input
          value={updateData && updateData.task}
          onChange={(e) => changeTask(e)}
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Edit task"
          // onChange={handleChange}
        />
        <button
          type="submit"
          onClick={updateTask}
          className="text-white absolute right-[6rem] bottom-2.5 bg-[#35A29F] hover:opacity-75 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Edit Task
        </button>
        <button
          type="submit"
          onClick={cancelUpdate}
          className="text-white absolute right-2.5 bottom-2.5 bg-red-500 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Cancel
        </button>
      </div>
    </>
  );
};
