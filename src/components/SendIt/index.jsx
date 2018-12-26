import { Component } from 'react';

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
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 499) {
                this.setState({
                    showMenu: false
                });
            }
        });
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