import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import App from './App';
import {store} from './redux/store';

import './index.css';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    rootElement
  );
}

if(module.hot) {
  module.hot.accept('./App.js', function() {
    setTimeout(render());
  });
}

render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
