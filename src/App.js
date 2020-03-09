import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import MyPage from './components/MyPage';
import Profile from './components/Profile';
import AddFriend from './components/AddFriend';

const App = () => {
  return (
    <Router>
        <Switch>
          <Route exact path='/' component = {Home} />
          <Route exact path='/signup' component = {SignUp} />
          <Route exact path='/login' component = {Login} />
          <Route exact path='/mypage' component = {MyPage} />
          <Route exact path='/profile' component = {Profile} />
          <Route exact path='/addfriend' component = {AddFriend} />
        </Switch>
    </Router>
  );
}

export default App;