import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import MyPage from './MyPage';
import TopPage from './TopPage';

// import './Styles.scss'

const App = () => {

  return (
    <Router>
    <>
    <Route exact path="/" component = {TopPage} />
    <Route exact path="/mypage" component = {MyPage} />

    </>
    </Router>
  )
}

// App.defaultProps = {
  
// }

export default App;
