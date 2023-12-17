import Header from "components/molecules/Header"
import styles from "./index.module.scss"
import ListTodo from "components/molecules/ListTodo"

const Home = () => {
    return (
        <div className={styles.homeWrapper}>
            <Header />
            <ListTodo />
        </div>
    )
}

export default Home