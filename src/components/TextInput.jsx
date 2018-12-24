import PropTypes from 'prop-types';

const TextInput = ({ autofocus, required, name, label, placeholder, value, isValid, isCheckingValidity, type, helperText, handleChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <div className="form-input-container">
                <input
                    autoFocus={autofocus || undefined}
                    required={required || undefined}
                    className="form-text-input"
                    id={name}
                    name={name}
                    type={type || 'text'}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                />
                {isCheckingValidity && <i className="fas fa-spinner fa-spin"></i>}
                {isValid && <i className="far fa-check-circle"></i>}
                {isValid === false && <i className="far fa-times-circle"></i>}
            </div>
            {helperText && <span className="form-helper-text">{helperText}</span>}
        </div>
    );
};

TextInput.propTypes = {
    autofocus: PropTypes.bool,
    required: PropTypes.bool,
    name: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    isValid: PropTypes.bool,
    isCheckingValidity: PropTypes.bool,
    type: PropTypes.oneOf(['password', 'text']),
    handleChange: PropTypes.func
};

export default TextInput;