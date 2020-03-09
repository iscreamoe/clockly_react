import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

import styled from 'styled-components';
import bgImg from './images/bgImg.jpg';

import SignUp from './components/SignUp';
import Login from './components/Login';
import MyPage from './components/MyPage';
import Profile from './components/Profile';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Wrapper>
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route exact path="/mypage" component = {MyPage} />
          <Route exact path="/profile" component = {Profile} />
          <Route exact path="/signup" component = {SignUp} />
          <Route exact path="/login" component = {Login} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

const Wrapper = styled.div`
  background-image: url(${bgImg});
  background-size: cover;
  height: 100vh;
` 

export default App;