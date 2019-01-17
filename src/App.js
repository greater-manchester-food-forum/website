import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
