import styles from './index.module.scss';

const Input = ({ accessor, label, type, value, onChange, customStyle, inline = false, options, errors, ...props }) => {

    const inputId = `${accessor}-input`;

    const handleChange = (e) => {
        onChange(accessor, e.target.value)
    }

    const renderTextInput = () => <>
        {label && <label htmlFor={inputId}>{label}:</label>}
        <input
            type="text"
            id={inputId}
            data-testid={inputId}
            name={accessor}
            value={value}
            style={customStyle}
            onChange={handleChange}
        />
    </>

    const renderEmailInput = () => <>
        {label && <label htmlFor={inputId}>{label}:</label>}
        <input
            type="email"
            id={inputId}
            data-testid={inputId}
            name={accessor}
            value={value}
            style={customStyle}
            onChange={handleChange}
        />
    </>

    const renderPasswordInput = () => <>
        {label && <label htmlFor={inputId}>{label}:</label>}
        <input
            type="password"
            id={inputId}
            data-testid={inputId}
            name={accessor}
            value={value}
            style={customStyle}
            onChange={handleChange}
        />
    </>

    const renderCheckInput = () => <>
        {label && <label htmlFor={inputId}>{label}:</label>}
        <input
            type="checkbox"
            id={inputId}
            data-testid={inputId}
            name={accessor}
            checked={value}
            style={customStyle}
            onChange={handleChange}
        />
    </>

    const renderDropdownInput = () => (
        <>
            {label && <label htmlFor={inputId}>{label}:</label>}
            <select
                id={inputId}
                data-testid={inputId}
                name={accessor}
                value={value}
                style={customStyle}
                onChange={handleChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </>
    );

    const renderTextAreaInput = () => <>
        {label && <label htmlFor={inputId}>{label}:</label>}
        <textarea
            type="text"
            id={inputId}
            data-testid={inputId}
            cols="25"
            name={accessor}
            value={value}
            style={customStyle}
            onChange={handleChange}
        />
    </>

    const renderInput = () => {
        switch (type) {
            case "email": return renderEmailInput(); break;
            case "password": return renderPasswordInput(); break;
            case "checkbox": return renderCheckInput(); break;
            case "dropdown": return renderDropdownInput(); break;
            case "textarea": return renderTextAreaInput(); break;
            default: return renderTextInput();
        }
    }

    return <div className={styles.inputWraper}>
        {renderInput()}
        {errors && <span className={styles.error}>{errors}</span>}
    </div>
}

export default Input