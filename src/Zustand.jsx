import React from "react";
import { useTodoStore } from "./store";
// import { useStore } from "./store";

import { MdDelete, MdEdit } from "react-icons/md";

export default function TodoList() {
  const {
    input,
    tasks,
    isEditing,
    setInput,
    addTask,
    updateTask,
    deleteTask,
    startEdit,
  } = useTodoStore();

  function handleSubmit() {
    if (isEditing) {
      updateTask();
    } else {
      addTask();
    }
  }

  return (
    <div style={{ width: "400px", margin: "40px auto" }}>
      <h2>Todo List</h2>

      {/* Input Box */}
      <input
        type="text"
        placeholder="Enter task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "70%", padding: "8px" }}
      />

      {/* Button changes Add → Update */}
      <button
        onClick={handleSubmit}
        style={{
          padding: "8px 12px",
          marginLeft: "10px",
          background: isEditing ? "orange" : "green",
          color: "white",
        }}
      >
        {isEditing ? "Update" : "Add"}
      </button>

      <ul style={{ marginTop: "20px" }}>
        {tasks.map((task) => (
          <li
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              padding: "8px",
              background: "#eee",
            }}
          >
            {task.text}

            <div>
              {/* Edit Button */}
              <MdEdit
                size={22}
                style={{ marginRight: "10px", cursor: "pointer" }}
                onClick={() => startEdit(task.id)}
              />

              {/* Delete Button */}
              <MdDelete
                size={22}
                style={{ cursor: "pointer", color: "red" }}
                onClick={() => deleteTask(task.id)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}







// import React from "react";
// import { useStore } from "./store";

// export default function App() {
//   const { count, inc, dec, reset } = useStore();

//   return (
//     <div>
//       <h1>Count: {count}</h1>

//       <button onClick={inc}>Increase</button>
//       <button onClick={dec}>Decrease</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
// }
