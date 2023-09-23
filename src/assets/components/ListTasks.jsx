import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ListTasks = ({ todo, markDone, setUpdateData, deleteTask }) => {
  return (
    <div
      className={`flex justify-between px-5 bg-slate-100 border-solid border-2 border-[#35A29F]  my-2 py-3 ${todo.complete ? "line-through" : ""}`}
      key={todo.id}
    >
      <div key={todo.id}>{todo.task}</div>
      <div className="flex justify-around">
        <input
          checked={todo.complete}
          onClick={(e) => markDone(todo.id)}
          id="checked-checkbox"
          type="checkbox"
          className="w-5  h-5 mt-1 mr-5 rounded-full text-blue-600 bg-gray-100 border-gray-300  focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        {todo.complete ? null : (
          <span
            className=" text-amber-500 text-2xl mr-5 cursor-pointer"
            title="Edit"
            onClick={() =>
              setUpdateData({
                id: todo.id,
                task: todo.task,
                complete: todo.complete ? true : false,
              })
            }
          >
            <FontAwesomeIcon icon={faPen} />
          </span>
        )}
        <span className=" text-red-600 text-2xl  cursor-pointer" title="Delete" onClick={() => deleteTask(todo.id)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </span>
      </div>
    </div>
  );
};
