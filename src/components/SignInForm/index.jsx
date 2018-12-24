import { Component } from 'react';

import History    from '../../services/history';
import SendIt     from '../../libraries/sendit';
import SignInForm from './SignInForm';

class SignInFormContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            loading: false,
            error: null,
            username: "",
            password: ""
        };
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsername(e) {
        this.setState({ username: e.target.value });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    async handleSubmit(e) {
        this.setState({ loading: true });
        e.preventDefault();
        try {
            const res = await SendIt.request('POST', 'auth/login', {
                username: this.state.username,
                password: this.state.password
            });
            localStorage.setItem('jwt-token', res.jwt_token);
            History.push('/');
        } catch (ex) {
            this.setState({
                loading: false,
                error: ex.message
            });
        }
    }

    render() {
        return (
            <SignInForm
                children={this.props.children}
                username={this.state.username}
                password={this.state.password}
                handleUsername={this.handleUsername}
                handlePassword={this.handlePassword}
                handleSubmit={this.handleSubmit}
                loading={this.state.loading}
                error={this.state.error}
            />
        );
    }
}

export default SignInFormContainer;