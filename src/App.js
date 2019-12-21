import React from 'react';

import axios from 'axios';
import Navbar from './components/layouts/Navbar';
import Users from './components/user/Users';
import Search from './components/user/Search';
import Alert from './components/layouts/Alert';
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  }

  // Search Github Users
  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${
      process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: res.data.items, loading: false});
  }

  // Clear Users from state;
  clearUsers = () => this.setState({ users: [], loading: false});

  // Set Alert
  setAlert = (msg, type) => {
    this.setState({ alert: {msg, type}});

    setTimeout(() => this.setState({alert: null}), 5000);
  }

  render() {
    const {users, loading, alert}= this.state;

    return ( 
      <div className = "App" >
        <Navbar />
        <div className="container">
          <Alert alert={alert} />
          <Search 
            searchUsers={this.searchUsers} 
            clearUsers={this.clearUsers} 
            showClear={users.length > 0 ? true : false} 
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;