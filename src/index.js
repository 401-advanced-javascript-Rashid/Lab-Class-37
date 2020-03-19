/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux' ;
import store from './store/index.js';
import App from './app';
import './index.css';

function Main() {
  return(
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
}

ReactDOM.render(<Main />, document.getElementById('root'));

