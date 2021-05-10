import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import ConfigView from './Pages/ConfigView';
import MainScreen from './Pages/MainScreen';

function App() {
  return (
    <Router>
      <Switch>
        <Route component={MainScreen} path={'/home'}/>
        <Route component={ConfigView} path={'/account-settings'}/>
        <Redirect to='/home' />
      </Switch>
    </Router>
  );
}

export default App;
