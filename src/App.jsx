import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect}  from 'react-router-dom';
import './main.scss';

import Navbar from './Components/Navbar';
import PageNotFound from './PageNotFound';


import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import Section1 from './Components/pages/Section1';
import Section2 from './Components/pages/Section2';
import Contact from './Components/pages/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/section1' exact component={Section1} />
          <Route path='/section2' exact component={Section2} />
          <Route path='/contact' exact component={Contact} />
          <Route path="/404" exact component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    );
  }
}
export default App;