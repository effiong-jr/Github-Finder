import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Users from './components/user/Users';
import User from './components/user/User';
import Search from './components/user/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';

const App = () => {

    return ( 
      <GithubState>
        <AlertState>
          <Router>
            <div className = "App" >
              <Navbar />
              <div className="container">
                <Alert />
                <Switch>
                  <Route exact path='/' render={(props) => (
                    <React.Fragment>
                      <Search />
                      <Users/>
    
                    </React.Fragment>
                  )} />
                  <Route exact path='/user/:login' component={User} />
                  <Route exact path='/about' component={About} />
                </Switch>
              </div>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    );
}

export default App;