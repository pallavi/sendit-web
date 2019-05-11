import { Redirect, Route, Switch } from 'react-router-dom';

import About       from './pages/About';
import Features    from './pages/Features';
import Home        from './pages/Home';
import Locations   from './pages/Locations';
import Login       from './pages/Login';
import NotFound    from './pages/NotFound';
import Overview    from './pages/Overview';
import Register    from './pages/Register';
import RoutePage   from './pages/Routes/Route';
import Routes      from './pages/Routes';
import SecureRoute from './SecureRoute';
import SendIt      from './SendIt';
import SessionLog  from './pages/SessionLog';
import Settings    from './pages/Settings';

const isAuthenticated = localStorage.getItem('jwt-token');

const App = () =>
  <Switch>
    {!isAuthenticated && <Route exact path="/" component={Home} />}
    <SecureRoute public path="/about" component={About} />
    <SecureRoute public path="/features" component={Features} />
    <SecureRoute public path="/login" component={Login} />
    <SecureRoute public path="/register" component={Register} />
    <SendIt>
      <Switch>
        {isAuthenticated && <Route exact path="/" component={Overview} />}
        <Redirect from="/overview" to="/" />
        <SecureRoute path="/session-log" component={SessionLog} />
        <SecureRoute exact path="/routes" component={Routes} />
        <SecureRoute path="/routes/:id" component={RoutePage} />
        <SecureRoute path="/locations" component={Locations} />
        <SecureRoute path="/settings" component={Settings} />
        <Route path="/" component={NotFound} />
      </Switch>
    </SendIt>
  </Switch>
;

export default App;
