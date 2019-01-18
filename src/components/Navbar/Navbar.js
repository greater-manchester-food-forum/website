import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBarLink from './NavBarLink';

class Navbar extends Component {
  state = {
    navLinks: [
      { text: 'Home', to: '/', exact: true },
      { text: 'About Us', to: '/about-us' },
      { text: 'Forum', to: 'https://www.discourse.org/', external: true },
      { text: 'Contact', to: '/contact' },
    ],
    navOpen: false,
  };

  toggleNav = () => {
    const { navOpen } = this.state;
    this.setState({ navOpen: !navOpen });
  };

  closeNavBar = () => {
    this.setState({ navOpen: false });
  };

  render() {
    const { navLinks, navOpen } = this.state;
    return (
      <React.Fragment>
        <nav
          className=" fixed w-full z-50 pin-t
      bg-transparent
      px-12 py-6 mb-6"
        >
          <div className="container mx-auto flex items-center justify-between flex-wrap">
            <Link
              onClick={this.closeNavBar}
              to="/"
              className="flex items-center text-white no-underline cursor-pointer"
            >
              <span className="text-4xl font-bold tracking-tight">SAFE</span>
            </Link>

            <div className="block md:hidden outline-none">
              <button
                style={{ outline: 'none' }}
                onClick={this.toggleNav}
                className="
                  flex items-center outline-none
                  px-3 py-2 border 
                  rounded text-grey border-grey 
                  hover:text-white hover:border-white"
                type="button"
              >
                <svg
                  className="fill-current h-3 w-3 outline-none"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>
            <div
              className={`${
                navOpen ? '' : 'hide'
              } w-full hidden md:flex md:items-center md:w-auto`}
            >
              {navLinks
                ? navLinks.map((item, i) => (
                    <NavBarLink
                      item={item}
                      closeNav={this.closeNavBar}
                      key={i}
                      external
                    />
                  ))
                : null}
            </div>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
