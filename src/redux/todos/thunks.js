import { createAsyncThunk } from '@reduxjs/toolkit';
import TodosAPI from './services';

export const getTodo = createAsyncThunk('todos/getTodo', async (id, thunkAPI) => {
  try {
    const response = await TodosAPI.getTodo(id);
    return { data: response.data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.data);
  }
});

export const getAllTodos = createAsyncThunk('todos/getAllTodos', async (params, thunkAPI) => {
  try {
    const response = await TodosAPI.getAllTodos(params);
    return { data: response.data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.data);
  }
});

export const createTodo = createAsyncThunk('todos/createTodo', async (data, thunkAPI) => {
  try {
    const params = {
      title: data.title,
      description: data.description,
      completed: false,
      userId: data.userId,
      created_at: new Date()
    }
    const response = await TodosAPI.createTodo(params);
    return { data: response.data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.data);
  }
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id, thunkAPI) => {
  try {
    await TodosAPI.deleteTodo(id);
    return { data: id };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.data);
  }
});

export const markTodo = createAsyncThunk('todos/markTodo', async (data, thunkAPI) => {
  try {
    const {id, todo} = data;
    todo.finished_at = todo.checked ? new Date() : false;
    const response = await TodosAPI.updateTodo(id, todo);
    return { data: response.data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.data);
  }
});

export const archiveTodo = createAsyncThunk('todos/archiveTodo', async (data, thunkAPI) => {
  try {
    const {id, todo} = data;
    todo.archive_at = new Date();
    const response = await TodosAPI.updateTodo(id, todo);
    return { data: response.data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.data);
  }
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async (data, thunkAPI) => {
  try {
    const {id, todo} = data;
    const response = await TodosAPI.updateTodo(id, todo);
    return { data: response.data };
  } catch (error) {
    return thunkAPI.rejectWithValue(error.data);
  }
});
