import { useHistory } from "react-router-dom";
import Weather from "../Weather";
import styles from "./index.module.scss"

const Header = () => {

    const history = useHistory();

    return (
        <header className={styles.header}>
            <div className={styles.headerLeft} onClick={() => history.push("/")}>
                <h1>Unifi Todo App</h1>
            </div>
            <div className={styles.headerRight}>
                <Weather />
                <div>Dark</div>
            </div>
        </header>
    );

}

export default Header