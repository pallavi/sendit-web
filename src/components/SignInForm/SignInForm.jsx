import Flash     from '../Flash';
import TextInput from '../TextInput';

const SignInForm = ({ children, username, password, handleUsername, handlePassword, handleSubmit, loading, error }) =>
    <form className="form-container" onSubmit={handleSubmit}>
        {children}
        {error && <Flash type="danger" message={error} />}
        <TextInput 
            autofocus={true}
            required={true}
            label="Username"
            name="username"
            value={username}
            placeholder="Enter your username"
            handleChange={handleUsername}
        />
        <TextInput 
            required={true}
            label="Password"
            name="password"
            type="password"
            value={password}
            placeholder="Enter your password"
            handleChange={handlePassword}
        />
        <button type="submit" className='btn btn-large btn-blue'>
            <div>{loading ? <i className="fas fa-spinner fa-spin"></i> : 'Sign In'}</div>
        </button>
        <span className="helper-text">
            New to SendIt? <a href="/register">Sign up here.</a>
        </span>
    </form>
;

export default SignInForm;