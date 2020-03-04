import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import MyPage from './components/MyPage';
import TopPage from './components/TopPage';
import Time from './components/Time';

const App = () => {

  return (
    <Router>
      <Route exact path="/" component = {TopPage} />
      <Route exact path="/mypage" component = {MyPage} />
      <Route exact path="/time" component = {Time} />
    </Router>
  );
}

export default App;
