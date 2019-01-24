import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Navigation from './containers/Navigation/Navigation';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import AboutUs from './components/AboutUs';
import ScrollTop from './components/ScrollTop';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollTop>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={AboutUs} />
          </Switch>
          <Footer />
        </ScrollTop>
      </Router>
    );
  }
}

export default App;
