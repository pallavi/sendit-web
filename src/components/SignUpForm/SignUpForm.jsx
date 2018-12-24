import Flash     from '../Flash';
import TextInput from '../TextInput';

const SignUpForm = ({ children, username, isCheckingUsername, isUniqueUsername, password, handleUsername, handlePassword, handleSubmit, isCreatingAccount, error }) =>
    <form className="form-container" onSubmit={handleSubmit}>
        {children}
        {error && <Flash type="danger" message={error} />}
        <TextInput
            autofocus={true}
            required={true}
            label="Username"
            name="username"
            value={username}
            placeholder="Choose a username"
            isValid={isUniqueUsername}
            isCheckingValidity={isCheckingUsername}
            helperText={isUniqueUsername === false ? "That username is not available." : null}
            handleChange={handleUsername}
        />
        <TextInput
            required={true}
            label="Password"
            name="password"
            type="password"
            value={password}
            placeholder="Create a password"
            helperText="Your password must be at least 10 characters in length."
            handleChange={handlePassword}
        />
        <button type="submit" className="btn btn-large btn-orange">
            <div>{isCreatingAccount ? <i className="fas fa-spinner fa-spin"></i> : 'Sign Up'}</div>
        </button>
        <span className="helper-text">
            Already have an account? <a href="/login">Sign in here.</a>
        </span>
    </form>
;

export default SignUpForm;