import Logo       from './Logo';
import SignInForm from './SignInForm';

const Login = () =>
    <div className="login-container">
        <SignInForm>
            <div className="form-header">
                <Logo />
                <h2>Welcome back!</h2>
            </div>
        </SignInForm>
    </div>
;

export default Login;