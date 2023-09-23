import React from "react";
import Search from "../icons/search.svg";

export const InputSearch = ({ setSearch, filterData }) => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
          <img src={Search} className="w-4 h-4 text-gray-500 dark:text-gray-400" alt="icon search" />
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search To Do ...."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <button
          className={`w-[100%] mt-3 rounded-md p-3 bg-[#35A29F] text-white hover:opacity-75`}
          onClick={() => {
            filterData();
          }}
        >
          Search
        </button>
      </div>
    </>
  );
};
