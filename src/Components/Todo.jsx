import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { FaRegEdit, FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import dayjs from "dayjs";

import TodoData from "./TodoData";

const Todo = () => {
  const [todo, setTodo] = useState([]);

  const [input, setInput] = useState("");

  const [showAlert, setAlert] = useState(false);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    const newTodo = {
      todoData: input,
      todoStatus: "Pending",
      todoTime: dayjs().format("hh:mm A"),
    };

    if (!input) {
      setAlert(true);

      setTimeout(() => {
        setAlert(false);
      }, 1200);

      return;
    }

    setTodo([...todo, newTodo]);

    setInput("");
  };

  {
    useEffect(() => {
      console.log("Updated todos:", todo);
    }, [todo]);
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Task Manager</h1>
          <p className="text-gray-400">
            Organize your work and boost productivity
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-700">
          {/* Stats Bar */}
          <div className="bg-gray-750 p-6 border-b border-gray-700">
            <div className="flex justify-between items-center">
              <div className="text-center">
                <p className="text-gray-400 text-sm">Total Tasks</p>
                <p className="text-white font-bold text-xl">{todo.length}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm">Completed</p>
                <p className="text-green-400 font-bold text-xl">0</p>
              </div>
              <div className="text-center">
                <p className="text-gray-400 text-sm">Pending</p>
                <p className="text-yellow-400 font-bold text-xl">
                  {todo.length}
                </p>
              </div>
            </div>
          </div>

          {/* Add Task Section */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => {
                    handleInput(e);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") addTodo();
                  }}
                  placeholder="What needs to be done?"
                  className="w-full p-4 bg-gray-700 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <i className="fas fa-plus text-gray-500"></i>
                </div>
              </div>
              <button
                onClick={addTodo}
                className="bg-blue-500 hover:bg-blue-700 text-white p-4 rounded-xl text-2xl transition-colors duration-200 cursor-pointer"
              >
                <FaPlus />
              </button>
            </div>
          </div>

          {/* Task List */}
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-white">
                Today's Tasks
              </h2>
              <div className="text-gray-400 text-sm">{todo.length} tasks</div>
            </div>

            {showAlert && (
              <div className="p-3 mb-2 text-red-700 bg-red-100 rounded ">
                Please enter a todo before adding.
              </div>
            )}

            <div className="space-y-4">
              {/* Completed Task */}
              {todo.map((todoItem, index) => (
                <TodoData key={index} id={index} todo={todoItem} />
              ))}

              {/* Active Task */}
              {/* <div className="flex items-center justify-between p-4 bg-gray-700 rounded-xl border border-gray-600 hover:border-gray-500 transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 rounded-full border-2 border-yellow-400"></div>
                  <div>
                    <p className="font-medium text-white">
                      Meeting with client
                    </p>
                    <p className="text-xs text-gray-500">
                      High Priority • Today, 2:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2 opacity-0 hover:opacity-100 transition-opacity duration-200">
                  <button className="text-gray-400 hover:text-blue-400 p-2 rounded-lg hover:bg-gray-600 transition-colors">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="text-gray-400 hover:text-red-400 p-2 rounded-lg hover:bg-gray-600 transition-colors">
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div> */}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 bg-gray-750 border-t border-gray-700">
            <div className="flex justify-between items-center">
              <div className="text-gray-400 text-sm">
                <i className="fas fa-info-circle mr-2"></i>
                Click on tasks to mark complete
              </div>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <i className="fas fa-filter"></i>
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <i className="fas fa-sort"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
