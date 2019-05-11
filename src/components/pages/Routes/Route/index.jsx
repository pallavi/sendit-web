import _             from 'lodash';
import { Component } from 'react';

import Route from './Route';
import SendIt from '../../../../libraries/sendit';

class RouteContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            route: null
        };
    }

    async componentDidMount() {
        try {
            const id = this.props.match.params.id;
            const route = await SendIt.request('GET', `routes/${id}`, null);
            const climbs = await SendIt.request('GET', 'climbs', null, { route: id });
            route.climbs = climbs;

            this.setState({
                route
            });
        } catch (ex) {
            this.setState({
                error: ex.message
            });
        }
    }

    render() {
        if (this.state.route === null) {
            return null;
        }

        return (
            <Route
                route={this.state.route}
            />
        )
    }
};

export default RouteContainer;