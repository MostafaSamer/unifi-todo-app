import styles from "./index.module.scss"

const EmptyList = () => {
    return <div className={styles.emptyListWraper}>
        <div className={styles.emptyList}>
            No tasks is added, Start add tasks!
        </div>
    </div>
}

export default EmptyList