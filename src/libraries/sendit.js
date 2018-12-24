import QueryString from 'qs';

import Config from '../../config';

class SendIt {

    constructor() {
        this.jwtToken = localStorage.getItem('jwt-token');
    }

    async checkStatus(response) {
        const res = await response.json();
        if (response.status >= 200 && response.status < 300) {
            return res;
        }
        const error = new Error(res.message);
        error.status = response.status;
        throw error;
    }

    async request(method, endpoint, payload, query) {
        const headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8'
        };
        if (this.jwtToken) {
            headers.authorization = `Bearer ${this.jwtToken}`;
        }

        let body = undefined;
        if (payload) {
            body = JSON.stringify(payload);
        }

        let uri = `${Config.SENDIT_API_HOST}/${endpoint}`;
        if (query) {
            const queryString = QueryString.stringify(query);
            uri = `${uri}?${queryString}`;
        }

        const response = await fetch(uri, {
            method,
            headers,
            body
        });

        return this.checkStatus(response);
    }
}

export default new SendIt();