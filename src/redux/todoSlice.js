import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    deleteTodo: (state, action) => {
      return state.filter((todos) => todos.id !== action.payload);
    },
    completeTodo: (state, action) => {
      const completedTodo = state.find((todos) => todos.id === action.payload);
      completedTodo.isCompleted = !completedTodo.isCompleted;
    },
  },
});

export const { addTodo, deleteTodo, completeTodo } = todoSlice.actions;
export const selectTodo = (state) => state.todos;
export default todoSlice.reducer;
