import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreType } from './store';
import { TodoType } from '../components/types/TodoType';

const initialState: TodoType[] = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoType>) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todos) => todos.id !== action.payload);
    },
    completeTodo: (state, action: PayloadAction<string>) => {
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
export const selectTodo = (state: StoreType) => state.todos;
export default todoSlice.reducer;
