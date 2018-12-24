import PropTypes from 'prop-types';

import { Route } from 'react-router-dom';

class SecureRoute extends Route {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        const isLoggedIn = Boolean(localStorage.getItem('jwt-token'));
        
        if (this.props.public && isLoggedIn) {
            this.context.router.history.push('/');
        }
        else if (!this.props.public && !isLoggedIn) {
            this.context.router.history.push('/');
        }
    }
}

SecureRoute.propTypes = {
    public: PropTypes.bool
};

export default SecureRoute;