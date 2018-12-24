import { Component } from 'react';

import History    from '../../services/history';
import SendIt     from '../../libraries/sendit';
import SignUpForm from './SignUpForm';

class SignUpFormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCreatingAccount: false,
            isCheckingUsername: false,
            error: null,
            username: "",
            password: ""
        };
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async handleUsername(e) {
        this.setState({
            username: e.target.value,
            isCheckingUsername: true,
            isUniqueUsername: null
        });
        if (e.target.value !== "") {
            try {
                const res = await SendIt.request('GET', 'users', null, { username: e.target.value });
                const isUniqueUsername = res.length === 0;
                this.setState({ isUniqueUsername });
            } catch (ex) {
                this.setState({ error: ex.message });
            }
        }
        this.setState({ isCheckingUsername: false });
    }

    handlePassword(e) {
        this.setState({ password: e.target.value });
    }

    async handleSubmit(e) {
        this.setState({ isCreatingAccount: true });
        e.preventDefault();
        try {
            let res = await SendIt.request('POST', 'users', {
                username: this.state.username,
                password: this.state.password
            }, null);
            res = await SendIt.request('POST', 'auth/login', {
                username: this.state.username,
                password: this.state.password
            });
            localStorage.setItem('jwt-token', res.jwt_token);
            History.push('/');
        } catch (ex) {
            this.setState({
                isCreatingAccount: false,
                error: ex.message
            });
        }
    }

    render() {
        return (
            <SignUpForm
                children={this.props.children}
                username={this.state.username}
                isCheckingUsername={this.state.isCheckingUsername}
                isUniqueUsername={this.state.isUniqueUsername}
                password={this.state.password}
                handleUsername={this.handleUsername}
                handlePassword={this.handlePassword}
                handleSubmit={this.handleSubmit}
                isCreatingAccount={this.state.isCreatingAccount}
                error={this.state.error}
            />
        );
    }
}

export default SignUpFormContainer;