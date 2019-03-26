import React, { Component } from 'react';
import './App.css';

import LoginPage from './Pages/LoginPage';
import AppRouter from './router/AppRouter';
import { auth, provider } from './firebase';

// Used for authentication
export const UserContext = React.createContext();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      test: ""
    }
  }
  
  
  componentDidMount () {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      }
    })
  }

  logout = () => {
    auth.signOut()
      .then(() => {
        this.setState({
          user:null
        })
      })
  }

  login = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        })
      })
  }

  
  render() {
    const {user} = this.state;
    const {logout} = this;
    return (
      <div>
        {user? (
          <UserContext.Provider value={{user, logout}}>
            <AppRouter />      
          </UserContext.Provider>  
        ):
          <LoginPage login={this.login} />
        }
      </div>
    );
  }
}


export default App;
