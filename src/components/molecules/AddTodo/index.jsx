import Input from "components/atoms/input";
import styles from "./index.module.scss";
import { useState } from "react";
import CtaButton from "components/atoms/CtaButton";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../../../redux/todos";

const AddTodo = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        if(title.replaceAll(" ", "") === "") return;
        dispatch(Todos.thunks.createTodo({
            title: title,
            description: description
        }))
        setTitle("");
        setDescription("");
    }

    return (
        <div className={styles.addTodoWrapper}>
            <div className={styles.addTodo}>
                <form>
                    <div>
                        <Input
                            accessor={"title"}
                            onChange={(accessor, value) => setTitle(value)}
                            customStyle={{
                                height: "27px",
                                width: "300px"
                            }}
                            value={title} />
                        <Input
                            accessor={"description"}
                            type={"textarea"}
                            onChange={(accessor, value) => setDescription(value)}
                            value={description} />
                    </div>
                    <CtaButton
                        text={"Add Todo"}
                        onClick={addTodo}
                        style={"primary"}
                        customStyle={{margin: "18px 0px"}}
                    />
                </form>
            </div>
        </div>
    )
}

export default AddTodo