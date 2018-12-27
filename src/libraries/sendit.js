import JWTDecode   from 'jwt-decode';
import QueryString from 'qs';

import Config from '../../config';

class SendIt {

    constructor() {
        this.refreshEndpoint = 'auth/refresh';
        this.refreshInterval = 120; //seconds
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

    async checkAndRefreshToken(token) {
        const claims = JWTDecode(token);
        const now = new Date().getTime() / 1000;
        if (now - claims.iat >= this.refreshInterval) {
            const res = await this.request('GET', this.refreshEndpoint);
            localStorage.setItem('jwt-token', res.jwt_token);
        }
    }

    async request(method, endpoint, payload, query) {
        const headers = {
            accept: 'application/json',
            'content-type': 'application/json; charset=utf-8'
        };
        const jwtToken = localStorage.getItem('jwt-token');
        if (jwtToken) {
            if (endpoint !== this.refreshEndpoint) {
                await this.checkAndRefreshToken(jwtToken);
            }
            headers.authorization = `Bearer ${jwtToken}`;
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