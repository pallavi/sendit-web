import Logo       from './Logo';
import SignUpForm from './SignUpForm';

const Register = () =>
    <div className="register-container">
        <SignUpForm>
            <div className="form-header">
                <Logo />
                <h2>Create an account</h2>
            </div>
        </SignUpForm>
    </div>
;

export default Register;