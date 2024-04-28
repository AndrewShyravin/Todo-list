import { createSelector } from '@reduxjs/toolkit';

const selectTodos = (state) => state.todos;

export const selectFilteredData = createSelector(selectTodos, (todos) => {
  return todos.filter((todo) => todo.isCompleted === true);
});
