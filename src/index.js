import React from 'react'
import ReactDOM from 'react-dom'
import * as firebase from 'firebase';
import 'semantic-ui-css/semantic.min.css'
import App from './App'

const firebaseConfig = {
  apiKey: "AIzaSyBRlLRQXi3eMwxzENzsTBq7HJ14IenrTjQ",
  authDomain: "mywebapp-clockly.firebaseapp.com",
  databaseURL: "https://mywebapp-clockly.firebaseio.com",
  projectId: "mywebapp-clockly",
  storageBucket: "mywebapp-clockly.appspot.com",
  messagingSenderId: "710816696240",
  appId: "1:710816696240:web:435350605d908ab6c5f875",
  measurementId: "G-QZ4P0TGT7H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
ReactDOM.render(<App />, document.getElementById('root'))


