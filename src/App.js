import React from 'react';
import Index from './components';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (<Router>
    <Switch>
      <Route exact path="/" component={Index} />
    </Switch>
  </Router>


  );
}

export default App;
