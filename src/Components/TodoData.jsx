import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FaRegEdit, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoData = ({ id, todo }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-700 rounded-xl border border-gray-600 hover:border-gray-500 transition-colors duration-200">
      <div className="flex items-center space-x-4">
        <div className="w-6 h-6 rounded-full border-2 border-yellow-400 flex items-center text-sm justify-center text-white"></div>
        <div>
          <p className="font-medium text-gray-300">{todo.todoData}</p>
          <p className="text-xs text-gray-500">
            {todo.todoStatus} •{todo.todoTime}
          </p>
        </div>
      </div>
      <div className="flex   transition-opacity duration-200">
        <button className="text-gray-400 hover:text-blue-400 p-2 text-2xl rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
          <FaRegEdit
            onClick={() => {
              console.log(id);
            }}
          />
        </button>
        <button className="text-gray-400 hover:text-red-400 p-2 text-2xl rounded-lg hover:bg-gray-600 cursor-pointer transition-colors">
          <MdDelete
            onClick={() => {
              console.log(id);
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default TodoData;
