import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      return state.filter((todos) => todos.id !== action.payload);
    },
    completeTodo: (state, action) => {
      const completedTodo = state.find((todos) => todos.id === action.payload);
      if (completedTodo) {
        completedTodo.isCompleted = !completedTodo.isCompleted;
      }
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todoToEdit = state.find((todos) => todos.id === id);
      if (todoToEdit) {
        todoToEdit.text = newText;
      }
    },
  },
});

export const { addTodo, deleteTodo, completeTodo, editTodo } =
  todoSlice.actions;
export const selectTodo = (state) => state.todos;
export default todoSlice.reducer;
