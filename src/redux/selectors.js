import { createSelector } from '@reduxjs/toolkit';

const selectTodos = (state) => state.todos;

export const selectCompletedFilterdData = createSelector(
  selectTodos,
  (todos) => {
    return todos.filter((todos) => todos && todos.isCompleted === true);
  }
);

export const selectUncompletedFilterdData = createSelector(
  selectTodos,
  (todos) => {
    return todos.filter((todos) => todos && todos.isCompleted === false);
  }
);
