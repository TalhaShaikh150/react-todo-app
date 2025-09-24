  import React, { useState } from "react";
  import { MdDelete } from "react-icons/md";

  const Todo = () => {
    const [text, setText] = useState("");
    const [todo, setData] = useState([]);

    const handleInputChange = (e) => {
      setText(e.target.value);
    };

    const addTodo = () => {
      text === "" ? alert("Please add Todo") : setData([...todo, text]);
      setText("");
    };

    return (
      <>
        <div
          className="h-screen 
        p-10 bg-neutral-900 text-white "
        >
          <div className="mx-auto w-1/2 text-center  p-10 rounded-md">
            <h1 className="text-5xl font-semibold pb-10">Todo List</h1>
            <div className="flex justify-center items-center gap-2">
              <input
                autoFocus
                placeholder="Add your new todo"
                value={text}
                type="text"
                className="border border-white w-2/3 h-10  px-2 text-md rounded-sm"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              
              />
              <button
                type="button"
                className="bg-red-600 text-white border border-gray-900 hover:bg-red-400 focus:ring-4  font-medium rounded-sm text-lg px-6 py-2 text-center cursor-pointer transition-all duration-300"
                onClick={addTodo}
              >
                Add
              </button>
            </div>

            <ul>
              {todo.map((data, index) => (
                <div
                  className="flex justify-between text-3xl text-left m-4 ps-2 font-normal rounded-sm p-2 bg-white text-black"
                  key={index}
                >
                  {data}
                  <MdDelete
                    onClick={() => {
                      setData([
                        ...todo.slice(0, index),
                        ...todo.slice(index + 1),
                      ]);
                    }}
                    className="text-red-600 text-4xl cursor-pointer "
                  />
                </div>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  };

  export default Todo;
