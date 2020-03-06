import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import MyPage from './components/MyPage';
import TopPage from './components/TopPage';
import Time from './components/Time';
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component = {TopPage} />
        <Route exact path="/mypage" component = {MyPage} />
        <Route exact path="/time" component = {Time} />
        <Route exact path="/signup" component = {SignUp} />
        <Route exact path="/login" component = {Login} />
      </Switch>
    </Router>
  );
}

export default App;
