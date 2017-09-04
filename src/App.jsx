import React from 'react';
import ReactDom from 'react-dom';
import {Route} from 'react-router';
import {HashRouter as Router} from 'react-router-dom';
//var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';


ReactDom.render(
  <Router>
    <Main>
      <Route path="/weather" component={Weather}/>
      <Route path="/about" component={About}/>
      <Route path="/examples" component={Examples}/>
    </Main>
  </Router>,
  document.getElementById('app')
);