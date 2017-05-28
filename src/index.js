import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import * as firebase from 'firebase';

  //Import Firebase 
  var config = {
    apiKey: "AIzaSyBWt0Fh6MX3q6DwBYgIbC5WAMXT6f8GxM8",
    authDomain: "brewscrews-70c7b.firebaseapp.com",
    databaseURL: "https://brewscrews-70c7b.firebaseio.com",
    projectId: "brewscrews-70c7b",
    storageBucket: "brewscrews-70c7b.appspot.com",
    messagingSenderId: "21175940499"
  };

  firebase.initializeApp(config);

const actions = {
  updateBeer(name) {
    firebase.database().ref('beers').child('beer').set(name)
  }  
}

firebase.database().ref().on('value', snapshot => {
  const store = snapshot.val()
  ReactDOM.render(<App store={store} actions={actions}/>, document.getElementById('root'));
  registerServiceWorker();
})

