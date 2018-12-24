import { Route, Switch } from 'react-router-dom';

import Home        from './Home';
import Login       from './Login';
import NotFound    from './NotFound';
import Overview    from './Overview';
import Register    from './Register';
import SecureRoute from './SecureRoute';
import SessionLog  from './SessionLog';
import SendIt      from './SendIt';

const isAuthenticated = localStorage.getItem('jwt-token');

const App = () =>
  <Switch>
    {!isAuthenticated && <Route exact path="/" component={Home} />}
    <SecureRoute public path="/login" component={Login} />
    <SecureRoute public path="/register" component={Register} />
    <SendIt>
      <Switch>
        {isAuthenticated && <Route exact path="/" component={Overview} />}
        <SecureRoute path="/session-log" component={SessionLog} />
        <Route path="/" component={NotFound} />
      </Switch>
    </SendIt>
  </Switch>
;

export default App;
