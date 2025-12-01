import React, { useReducer } from "react";
import { MdDelete, MdEdit } from "react-icons/md";

export default function TodoList() {
  const initState = {
    input: "",
    tasks: [],
    isEditing: false,
    editId: null,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "inputChange":
        return { ...state, input: action.payload };

      case "addTask":
        // Update existing task
        if (state.isEditing) {
          return {
            ...state,
            tasks: state.tasks.map((obj) =>
              obj.id === state.editId
                ? { ...obj, task: state.input.trim() }
                : obj
            ),
            input: "",
            isEditing: false,
            editId: null,
          };
        }
        else
        return {
          ...state,
          tasks: [...state.tasks, { id: Date.now(), task: state.input.trim() }],
          input: "",
        };

      case "removeTask":
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };

      case "editTask":
        return {
          ...state,
          isEditing: true,
          editId: action.payload,
          input: state.tasks.find((obj) => obj.id === action.payload).task,
        };

    }
  }

  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl">
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
        📝 Todo List
      </h2>

      {/* Input Box */}
      <form
        className="flex gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (!state.input.trim()) return;
          dispatch({ type: "addTask" });
        }}
      >
        <input
          type="text"
          placeholder="Enter your task..."
          value={state.input}
          onChange={(e) =>
            dispatch({ type: "inputChange", payload: e.target.value })
          }
          className="flex-1 px-4 py-2 border rounded-xl outline-none text-gray-700 
                     focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl 
                     transition-all"
        >
          {state.isEditing ? "Edit" : "Add"}
        </button>
      </form>

      {/* Task List */}
      <ul className="mt-6">
        {state.tasks.map((e) => (
          <li
            key={e.id}
            className="flex justify-between items-center bg-gray-100 px-4 py-3 
                       rounded-xl shadow-sm mt-2"
          >
            <span className="text-gray-800">{e.task}</span>

            <span className="flex gap-3 text-xl cursor-pointer">
              <MdEdit
                className="text-blue-500 hover:text-blue-700"
                onClick={() => dispatch({ type: "editTask", payload: e.id })}
              />
              <MdDelete
                onClick={() => dispatch({ type: "removeTask", payload: e.id })}
                className="text-red-500 hover:text-red-700"
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
