import { createSelector } from "@reduxjs/toolkit";

export const getTodos = createSelector(
  (state) => state.todos,
  (todos) => todos.todos,
);