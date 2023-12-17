import { createSlice } from '@reduxjs/toolkit';
import adapter from './adapter';
import * as thunks from './thunks';
import * as selectors from './selectors';
import { getTodo, getAllTodos, createTodo, deleteTodo, markTodo, archiveTodo, updateTodo } from './thunks';

export const slice = createSlice({
  name: 'todos',
  initialState: adapter.getInitialState({}),
  extraReducers: (builder) => {
    builder.addCase(getTodo.fulfilled, (state, action) => {
      const { payload } = action;
      const { data } = payload;
      if (!data.todo) return;
      adapter.setOne(state, data.todo);
    });
    builder.addCase(getAllTodos.fulfilled, (state, action) => {
      const { payload } = action;
      if (!payload.data) return;
      state.todos = payload.data;
      adapter.setAll(state, payload.data);
    });
    builder.addCase(createTodo.fulfilled, (state, action) => {
      const { payload } = action;
      if (!payload.data) return;
      state.todos.push(payload.data);
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      const { payload } = action;
      state.todos = state.todos.filter(t => t.id !== payload.data);
    });
    builder.addCase(markTodo.fulfilled, (state, action) => {
      const { payload } = action;
      const { data } = payload;
      const todo = state.todos.find(t => t.id === data.id);
      Object.assign(todo, data);
    });
    builder.addCase(archiveTodo.fulfilled, (state, action) => {
      const { payload } = action;
      const { data } = payload;
      const todo = state.todos.find(t => t.id === data.id);
      Object.assign(todo, data);
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const { payload } = action;
      const { data } = payload;
      const todo = state.todos.find(t => t.id === data.id);
      Object.assign(todo, data);
    });
  },
});

const Todos = {
  adapter,
  slice,
  thunks,
  selectors,
};
export default Todos;