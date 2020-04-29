import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// Bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap";
import "bootstrap/dist/js/bootstrap.js";
import $ from "jquery";

import {BrowserRouter} from "react-router-dom";

const app = (
  <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
  </BrowserRouter>
);


ReactDOM.render(app,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
