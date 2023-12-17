import { combineReducers } from 'redux';
import Todos from './todos';
import Weathers from './weather';

const rootReducer = () =>
  combineReducers({
    todos: Todos.slice.reducer,
    weathers: Weathers.slice.reducer,
  });

export default rootReducer;
