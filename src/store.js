import { create } from "zustand";

export const useTodoStore = create((set) => ({
  input: "",
  tasks: [],
  isEditing: false,
  editId: null,

  setInput: (value) => set({ input: value }),

  addTask: () =>
    set((state) => ({
      tasks: [...state.tasks, { id: Date.now(), text: state.input }],
      input: "",
    })),

  startEdit: (id) =>
    set((state) => {
      const task = state.tasks.find((t) => t.id === id);
      return {
        isEditing: true,
        editId: id,
        input: task.text,
      };
    }),

  updateTask: () =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === state.editId ? { ...t, text: state.input } : t
      ),
      input: "",
      isEditing: false,
      editId: null,
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== id),
    })),
}));










// import { create } from "zustand";

// export const useStore = create((set) => ({
//   count: 0,
//   inc: () => set((s) => ({ count: s.count + 1 })),
//   dec: () => set((s) => ({ count: s.count - 1 })),
//   reset: () => set({ count: 0 }),
// }));
