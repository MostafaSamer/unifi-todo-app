import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.scss"

import Todos from "../../../redux/todos";
import { useEffect } from "react";
import Todo from "components/atoms/Todo";
import EmptyList from "components/atoms/EmptyList";

const ListTodo = () => {
    const dispatch = useDispatch();
    const todos = useSelector(Todos.selectors.getTodos);

    useEffect(() => {
        dispatch(Todos.thunks.getAllTodos());
    }, []);

    const renderTodos = () => {
        return todos.length ? todos.map((todo) => (
            <div key={todo.id} className={styles.todoItem}>
                <Todo todo={todo} />
            </div>
        )) : <EmptyList />
    };


    return (
        <div className={styles.listTodosWrapper}>
            <div className={styles.listTodos}>{todos != undefined && renderTodos()}</div>
        </div>
    )
};

export default ListTodo;