import { useDispatch } from "react-redux";
// import CtaButton from "../CtaButton";
import styles from "./index.module.scss";
import Todos from "redux/todos";
// import Input from "../input";
import { useState } from "react";

const Todo = ({ todo }) => {

    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);

    const handleMarkTodo = () => {
        dispatch(Todos.thunks.markTodo({
            id: todo.id,
            todo: {
                ...todo,
                completed: !todo.completed
            }
        }))
    }

    const handleEditMode = () => {
        if (!editMode) setEditMode(true);
        else {
            if(editTitle === "") return;
            dispatch(Todos.thunks.updateTodo({
                id: todo.id,
                todo: {
                    ...todo,
                    title: editTitle
                }
            }));
            setEditMode(false);
        }
    }

    const handleDeleteTodo = () => {
        if (!editMode) dispatch(Todos.thunks.deleteTodo(todo.id))
        else setEditMode(false)
    }

    const renderTodo = () => editMode ?
        <Input
            accessor={"editTodo"}
            onChange={(accessor, value) => setEditTitle(value) }
            value={editTitle}
        /> :
        <p className={todo.completed ? `${styles.completed}` : ""}>{todo.title}</p>


    return (
        <div className={styles.todoWrapper}>
            <div className={styles.todo}>
                <Input
                    accessor={"mark"}
                    onChange={handleMarkTodo}
                    value={todo.completed}
                    type={"checkbox"}
                    customStyle={{
                        width: '20px',
                        height: '20px',
                        marginRight: '8px',
                        cursor: 'pointer'
                    }}
                />
                {renderTodo()}
            </div>
            <div className={styles.actions}>
                <CtaButton
                    text={editMode ? "Save" : "Edit"}
                    onClick={handleEditMode}
                    style={editMode ? "success" : "primary"}
                />
                <CtaButton
                    text={editMode ? "Discard" : "Delete"}
                    onClick={handleDeleteTodo}
                    style={"danger"}
                />
            </div>
        </div>
    )
}

export default Todo