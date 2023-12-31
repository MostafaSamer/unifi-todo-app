import { useDispatch } from "react-redux";
import styles from "./index.module.scss";
import Todos from "redux/todos";
import { useState } from "react";
import Input from "../input";
import CtaButton from "../CtaButton";

const Todo = ({ todo, disabled = false }) => {

    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);
    const [editDescription, setEditDescription] = useState(todo.description);

    const handleCheckedTodo = () => {
        dispatch(Todos.thunks.markTodo({
            id: todo.id,
            todo: {
                ...todo,
                checked: !todo.checked
            }
        }))
    }

    const handleArchiveTodo = () => {
        dispatch(Todos.thunks.archiveTodo({
            id: todo.id,
            todo: {
                ...todo,
                archive: true
            }
        }))
    }

    const handleEditMode = () => {
        if (!editMode) setEditMode(true);
        else {
            if (editTitle === "") return;
            dispatch(Todos.thunks.updateTodo({
                id: todo.id,
                todo: {
                    ...todo,
                    title: editTitle,
                    description: editDescription
                }
            }));
            setEditMode(false);
        }
    }

    const handleDeleteTodo = () => {
        if (!editMode) dispatch(Todos.thunks.deleteTodo(todo.id))
        else setEditMode(false)
    }

    const renderTodo = () => <div>
        {!disabled && editMode ? <>
            <Input
                accessor={"editTodoTitle"}
                onChange={(accessor, value) => setEditTitle(value)}
                value={editTitle} />
            <Input
                type={"textarea"}
                customStyle={{resize: "none"}}
                accessor={"editTodoDescription"}
                onChange={(accessor, value) => setEditDescription(value)}
                value={editDescription} />
        </> : <>
            <h4 className={todo.checked ? `${styles.checked}` : ""}>{todo.title}</h4>
            <p>{todo.description}</p>
        </>
        }
    </div>


    return (
        <div className={styles.todoWrapper}>
            <div className={styles.todo}>
                {!disabled && <Input
                    accessor={"mark"}
                    onChange={handleCheckedTodo}
                    value={todo.checked}
                    type={"checkbox"}
                    customStyle={{
                        width: '20px',
                        height: '20px',
                        marginRight: '8px',
                        cursor: 'pointer'
                    }}
                />}
                {renderTodo()}
            </div>
            {!disabled && <div className={styles.actions}>
                <div className={styles.actionsFirst}>
                    <CtaButton
                        text={editMode ? "Save" : "Edit"}
                        onClick={handleEditMode}
                        style={editMode ? "success" : "primary"}
                    />
                    <CtaButton
                        text={editMode ? "Discard" : "Delete"}
                        onClick={handleDeleteTodo}
                        customStyle={{width: "100%"}}
                        style={"danger"}
                    />
                </div>
                <CtaButton
                    text={"Archive"}
                    onClick={handleArchiveTodo}
                    customStyle={{width: "100%"}}
                    style={"secondary"}
                />
            </div>}
        </div>
    )
}

export default Todo