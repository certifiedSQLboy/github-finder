import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar'
import Users from './components/users/Users'
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';

class App extends Component {

    state = {
      users: [],
      user: {},
      repos: [],
      loading: false,
      alert: null
    };

  // async componentDidMount(){

  //   this.setState({loading: true});

  //   const url = `https://api.github.com/users?
  //   client_id=${process.env.REACT_APP_CLIEND_ID}&
  //   client_secrets=${process.env.REACT_APP_CLIENT_SECRET}`;
  //   const res = await (await fetch(url)).json();  

  //   this.setState({users: res, loading: false});
  // }

  //Search users
  searchUsers = async text => {

    this.setState({loading: true});

    const url = `https://api.github.com/search/users?q=${text}
    &client_id=${process.env.REACT_APP_CLIEND_ID}
    &client_secrets=${process.env.REACT_APP_CLIENT_SECRET}`;
    
    const res = await (await fetch(url)).json();  
    
    this.setState({users: res.items, loading: false});

  }

  //Get a single user
  getUser = async username => {

    this.setState({loading: true});
    const url = `https://api.github.com/users/${username}
    ?client_id=${process.env.REACT_APP_CLIEND_ID}
    &client_secrets=${process.env.REACT_APP_CLIENT_SECRET}`

    const res = await (await fetch(url)).json();

    this.setState({user: res, loading: false});

  }

  //Get a single user
  getUser = async username => {

    this.setState({loading: true});
    const url = `https://api.github.com/users/${username}
    ?client_id=${process.env.REACT_APP_CLIEND_ID}
    &client_secrets=${process.env.REACT_APP_CLIENT_SECRET}`

    const res = await (await fetch(url)).json();

    this.setState({user: res, loading: false});

  }
  
  //Get user repos
  getRepos = async username => {

    this.setState({loading: true});
    const url = `https://api.github.com/users/${username}/repos?
    per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_CLIEND_ID}
    &client_secrets=${process.env.REACT_APP_CLIENT_SECRET}`

    const res = await (await fetch(url)).json();

    this.setState({repos: res, loading: false});

  }


  //Clear Users
  clearUsers = () => this.setState({users: [], loading: false})

  //Alert users if form is submitted empty
  setAlert  = (msg, type) => {
    this.setState({alert:{msg, type}});

    setTimeout(() => {
      
      this.setState({alert: null});

    }, 5000);
  }


  render(){
    const {users, loading, alert, user, repos} = this.state;
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <div className="container">
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Alert alert={alert}/>
                  <Search 
                    searchUsers={this.searchUsers} 
                    clearUsers={this.clearUsers} 
                    showClear={users.length > 0 ? true : false}
                    setAlert={this.setAlert}
                  />
                  <Users users={users} loading={loading}/>
                </Fragment>
              )}>
              </Route>
              <Route exact path='/about' component={About}/>
              <Route exact path="/user/:login" render={props => (
                <User 
                  {...props} 
                  getUser={this.getUser}
                  getRepos={this.getRepos} 
                  user={user} 
                  repos ={repos}
                  loading={loading}
                />
              )}/>
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;