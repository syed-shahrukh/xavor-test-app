import React, { Component } from 'react';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import AdminPortal from './containers/AdminPortal/AdminPortal';






class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <Route path="/" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          
           <Route path={"/admin-portal/home"} component={AdminPortal}/>
            
            
          
         
        </div>
      </Router>
    );
  }
}

export default App;
