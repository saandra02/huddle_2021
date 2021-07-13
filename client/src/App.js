import React, { Component } from 'react';
import {HashRouter as Router, Route,} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import SubHeader from './components/Subheader';
import VideoCallGuest from './components/VideoCallGuest';
import Chats from './components/Chats';
import SignUpForm from './components/SignUpForm';


class App extends Component{
  
  render(){
    return(
      <Router>
        <div>
          <Header/>
          <SubHeader/>
          <Route exact path='/' component ={LoginForm}/>
          <Route exact path ='/video' component={VideoCallGuest}/>
          <Route exact path = '/chats' component={Chats}/>
          <Route exact path = '/signup' component={SignUpForm}/>
        </div>
      </Router>
    );
  }
}

export default App;
