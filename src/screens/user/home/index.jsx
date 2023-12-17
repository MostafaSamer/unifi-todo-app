import Header from "components/molecules/Header"
import styles from "./index.module.scss"
import ListTodo from "components/molecules/ListTodo"
import AddTodo from "components/molecules/AddTodo"

const Home = () => {
    return (
        <div className={styles.homeWrapper}>
            <Header />
            <AddTodo />
            <ListTodo />
        </div>
    )
}

export default Home