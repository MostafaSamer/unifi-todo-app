import styles from './index.module.scss';

const CtaButton = ({ text, onClick, style, customStyle }) => {
    return (
        <div className={styles.buttonWraper}>
            <button onClick={onClick}  className={`${styles[style]} ${styles.button}`} style={customStyle}>
                {text}
            </button>
        </div>
    )
}

export default CtaButton