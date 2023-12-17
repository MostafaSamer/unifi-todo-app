import styles from "./index.module.scss"

const Header = () => {

    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <h1>Unifi Todo App</h1>
            </div>
            <div className={styles.headerRight}>
                dark
            </div>
        </header>
    );

}

export default Header