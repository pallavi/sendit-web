import { Component } from 'react';
import JWTDecode     from 'jwt-decode';

import History from '../../services/history';
import SendIt  from './SendIt';

class SendItContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMenu: false
        };
        this.handleSignOut = this.handleSignOut.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.checkTokenExpiration = this.checkTokenExpiration.bind(this);
    }

    componentDidMount() {
        this.setSignoutTimeout();

        window.addEventListener('resize', () => {
            if (window.innerWidth > 499) {
                this.setState({
                    showMenu: false
                });
            }
        });
    }

    setSignoutTimeout() {
        this.setTokenExpirationTimeout = setTimeout(this.checkTokenExpiration, 10 * 1000);
    }

    checkTokenExpiration() {
        const token = localStorage.getItem('jwt-token');
        const claims = JWTDecode(token);
        const now = new Date().getTime() / 1000;
        if (now > claims.exp) {
            this.handleAutoSignOut();
        } else {
            clearTimeout(this.setTokenExpirationTimeout);
            this.setSignoutTimeout();
        }
    }

    handleAutoSignOut() {
        localStorage.removeItem('jwt-token');
        History.push('login');
    }

    handleSignOut() {
        localStorage.removeItem('jwt-token');
        History.push('/');
    }

    toggleMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        });
    }

    render() {
        return (
            <SendIt 
                location={this.props.location}
                handleSignOut={this.handleSignOut}
                toggleMenu={this.toggleMenu}
                showMenu={this.state.showMenu}
            >
                {this.props.children}
            </SendIt>
        );
    }
}

export default SendItContainer;