import { combineReducers } from 'redux';
import Todos from './todos';

const rootReducer = () =>
  combineReducers({
    todos: Todos.slice.reducer,
  });

export default rootReducer;
