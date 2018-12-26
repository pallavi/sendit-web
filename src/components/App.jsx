import { Redirect, Route, Switch } from 'react-router-dom';

import Home        from './Home';
import Locations   from './Locations';
import Login       from './Login';
import NotFound    from './NotFound';
import Overview    from './Overview';
import Register    from './Register';
import Routes      from './Routes';
import SecureRoute from './SecureRoute';
import SendIt      from './SendIt';
import SessionLog  from './SessionLog';
import Settings    from './Settings';

const isAuthenticated = localStorage.getItem('jwt-token');

const App = () =>
  <Switch>
    {!isAuthenticated && <Route exact path="/" component={Home} />}
    <SecureRoute public path="/login" component={Login} />
    <SecureRoute public path="/register" component={Register} />
    <SendIt>
      <Switch>
        {isAuthenticated && <Route exact path="/" component={Overview} />}
        <Redirect from="/overview" to="/" />
        <SecureRoute path="/session-log" component={SessionLog} />
        <SecureRoute path="/routes" component={Routes} />
        <SecureRoute path="/locations" component={Locations} />
        <SecureRoute path="/settings" component={Settings} />
        <Route path="/" component={NotFound} />
      </Switch>
    </SendIt>
  </Switch>
;

export default App;
