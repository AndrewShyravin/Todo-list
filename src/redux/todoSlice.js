import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const selectTodo = (state) => state.todos;
export default todoSlice.reducer;
