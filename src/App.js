import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './containers/Navigation/Navigation';
import Home from './components/Home';
import Error from './components/Error';
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
            <Route path="/*" component={Error} />
          </Switch>
          <Footer />
        </ScrollTop>
      </Router>
    );
  }
}

export default App;
