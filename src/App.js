import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import MyPage from './components/MyPage';
import TopPage from './components/TopPage';

const App = () => {

  return (
    <Router>
      <Route exact path="/" component = {TopPage} />
      <Route exact path="/mypage" component = {MyPage} />
    </Router>
  );
}

export default App;
