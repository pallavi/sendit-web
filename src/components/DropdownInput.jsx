const DropdownInput = ({ name, label, options, value, handleChange }) =>
    <div className="form-group">
        <label htmlFor={name} className="form-label">
            {label}
        </label>
        <select className="form-dropdown-input" name={name} value={value} onChange={handleChange}>
            {options.map((option) => <option key={option} value={option}>{option}</option>)}
        </select>
    </div>
;

export default DropdownInput;