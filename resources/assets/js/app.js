// app.js
require('./bootstrap');
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';


import Master from './components/Master';


render(
  <Router history={browserHistory}>
      <Route path="/" component={Master} >

      </Route>
    </Router>,
        document.getElementById('app'));