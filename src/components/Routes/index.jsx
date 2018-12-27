import _             from 'lodash';
import { Component } from 'react';

import Routes from './Routes';
import SendIt from '../../libraries/sendit';

class RoutesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            filters: {
                name: '',
                sortBy: 'Newest - Oldest',
                type: 'All',
                location: 'All',
                tag: 'All'
            },
            locations: ['All'],
            routes: null,
            tags: ['All'],
            filteredRoutes: null
        };
        this.handleName = this.handleName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.applyFilters = this.applyFilters.bind(this);
        this.toggleExpand = this.toggleExpand.bind(this);
    }

    async componentDidMount() {
        try {
            const routes = await SendIt.request('GET', 'routes', null, { include: 'climbs' });
            const locations = await SendIt.request('GET', 'locations');
            this.setState({
                routes,
                locations: [...this.state.locations, ...locations.map((l) => l.name)],
                tags: [...this.state.tags, ..._.union(...routes.map((r) => r.tags))]
            }, this.applyFilters);
        } catch (ex) {
            this.setState({
                error: ex.message
            });
        }
    }

    handleName(e) {
        this.setState({ filters: { ...this.state.filters, name: e.target.value } }, this.applyFilters);
    }

    handleDropdown(e) {
        this.setState({ filters: { ...this.state.filters, [e.target.name]: e.target.value } }, this.applyFilters);
    }

    toggleExpand(id) {
        const filteredRoutes = this.state.filteredRoutes;
        const idx = _.findIndex(filteredRoutes, { id });
        filteredRoutes[idx].expanded = !filteredRoutes[idx].expanded;
        this.setState({ filteredRoutes });
    }

    applyFilters() {
        let filteredRoutes = this.state.routes.map((r) => ({...r, expanded: false }));
        const filters = this.state.filters;
        if (filters.name !== "") {
            filteredRoutes = _.filter(filteredRoutes, (r) => r.name.includes(filters.name));
        }
        if (filters.type !== 'All') {
            filteredRoutes = _.filter(filteredRoutes, { type: filters.type.toLowerCase() });
        }
        if (filters.location !== 'All') {
            filteredRoutes = _.filter(filteredRoutes, (r) => r.location.name === filters.location);
        }
        if (filters.tag !== 'All') {
            filteredRoutes = _.filter(filteredRoutes, (r) => r.tags && r.tags.includes(filters.tag));
        }
        switch (filters.sortBy) {
            case 'Newest - Oldest':
                filteredRoutes = _.orderBy(filteredRoutes, 'date_created', 'desc');
                break;
            case 'Oldest - Newest':
                filteredRoutes = _.orderBy(filteredRoutes, 'date_created');
                break;
            case 'Name':
                filteredRoutes = _.orderBy(filteredRoutes, 'name');
                break;
            case 'Grade':
                filteredRoutes = _.orderBy(filteredRoutes, 'grade');
                break;
        }
        this.setState({ filteredRoutes });  
    }

    handleSubmit(e) {
        e.preventDefault();
        this.applyFilters();
    }

    render() {
        if (this.state.filteredRoutes === null) {
            return null;
        }

        return (
            <Routes
                routes={this.state.filteredRoutes}
                locations={this.state.locations}
                tags={this.state.tags}
                filters={this.state.filters}
                handleName={this.handleName}
                handleDropdown={this.handleDropdown}
                handleSubmit={this.handleSubmit}
                toggleExpand={this.toggleExpand}
            />
        )
    }
};

export default RoutesContainer;