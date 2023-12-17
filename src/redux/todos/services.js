import axios from '../../utils/requestHelper';

const getTodo = (id) => axios.get(`/todos/${id}`);

const getAllTodos = (params) => axios.get(`/todos?${new URLSearchParams(params).toString()}`);

const createTodo = (data) => axios.post(`/todos`, data);

const deleteTodo = (id) => axios.delete(`/todos/${id}`);

const updateTodo = (id, data) => axios.put(`/todos/${id}`, data);

const TodosAPI = {
  getTodo,
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};

export default TodosAPI;
