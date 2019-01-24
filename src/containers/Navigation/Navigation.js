import React, { Component } from 'react';
import { basename } from 'path';
import Navbar from '../../components/Navbar/Navbar';
import MobileNavbar from '../../components/Navbar/MobileNavbar';

export default class Navigation extends Component {
  state = {
    scrollPosition: 0,
    navLinks: [
      { text: 'Home', to: '/', exact: true, external: false },
      { text: 'About Us', to: '/about-us', external: false },
      { text: 'Forum', to: 'https://www.discourse.org/', external: true },
    ],
    navOpen: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  toggleNav = () => {
    const { navOpen } = this.state;
    const overFlow = navOpen ? 'auto' : 'hidden';
    document.body.style.overflow = overFlow;
    console.log('Overflow: ', overFlow);
    this.setState({ navOpen: !navOpen });
  };

  closeNavBar = () => {
    const { navOpen } = this.state;
    if (!navOpen) return;
    document.body.style.overflow = 'auto';
    this.setState({ navOpen: false });
  };

  handleScroll = () => {
    const doc = document.documentElement;
    const scrollTop =
      (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    this.setState({ scrollPosition: scrollTop });
  };

  render() {
    const { navOpen, navLinks, scrollPosition } = this.state;
    return (
      <React.Fragment>
        <Navbar
          scrollPosition={scrollPosition}
          navLinks={navLinks}
          navOpen={navOpen}
          isNavFixed={scrollPosition > 89}
          closeNavBar={this.closeNavBar}
          toggleNav={this.toggleNav}
        />
        <MobileNavbar
          navOpen={navOpen}
          navLinks={navLinks}
          closeNavBar={this.closeNavBar}
        />
      </React.Fragment>
    );
  }
}
