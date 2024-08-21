import styles from "./Select.module.css"
function Select({ text, name, options, handleOnChange, value }) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ''}>
                <option>Selecione uma opção</option>
                {options.map((el) => (
                    <option value={el.id} key={el.id}>{el.name}</option>
                ))}
            </select>
        </div>
    )
}

export default Select
