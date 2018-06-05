import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from './screens/login';
import Dashboard from './screens/dashboard';

class App extends Component {
  render() {
    return (
      <Router>
            <div>
                <Route exact path="/dashboard" component={Dashboard} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    );
  }
}

export default App;
