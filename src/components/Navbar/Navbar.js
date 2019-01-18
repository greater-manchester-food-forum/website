import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBarLink from './NavBarLink';

class Navbar extends Component {
  state = {
    scrollPosition: 0,
    navLinks: [
      { text: 'Home', to: '/', exact: true },
      { text: 'About Us', to: '/about-us' },
      { text: 'Forum', to: 'https://www.discourse.org/', external: true },
      { text: 'Contact', to: '/contact' },
    ],
    navOpen: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  toggleNav = () => {
    console.log('toggle noa');
    const { navOpen } = this.state;
    const overFlow = navOpen ? 'auto' : 'hidden';
    document.body.style.overflow = overFlow;
    this.setState({ navOpen: !navOpen });
  };

  closeNavBar = () => {
    const { navOpen } = this.state;
    const overFlow = navOpen ? 'auto' : 'hidden';
    document.body.style.overflow = overFlow;
    this.setState({ navOpen: false });
  };

  handleScroll = () => {
    const doc = document.documentElement;
    const scrollTop =
      (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

    const value = document.body.scrollTop;
    this.setState({ scrollPosition: scrollTop });
  };

  render() {
    const { navLinks, navOpen, scrollPosition } = this.state;
    const isNavFixed = scrollPosition > 80;
    let navTextColour;
    if (navOpen || isNavFixed) {
      navTextColour = 'safe-green';
    } else {
      navTextColour = 'white';
    }
    return (
      <React.Fragment>
        <nav
          className={`
          ${scrollPosition > 75 ? 'navbar-hidden-before-scroll' : ''}
       ${isNavFixed ? 'fixed bg-white fixed-nav' : 'absolute'} w-full z-50 pin-t
      bg-transparent
      px-6 md:px-12 py-6 mb-6`}
        >
          <div className="container mx-auto flex items-center justify-between flex-wrap">
            <Link
              onClick={this.closeNavBar}
              to="/"
              className="flex items-center text-white no-underline cursor-pointer"
            >
              <span
                className={`text-4xl text-${navTextColour} font-bold tracking-tight`}
              >
                GMFH
              </span>
            </Link>

            <div className="block md:hidden outline-none">
              <button
                style={{ outline: 'none' }}
                onClick={this.toggleNav}
                className={`
                text-${navTextColour} border-${navTextColour}
                  flex items-center outline-none
                  px-3 py-2  
                  rounded`}
                type="button"
              >
                {/* <svg
                  className="fill-current h-3 w-3 outline-none"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg> */}
                <div
                  className={`hamburger ${
                    navOpen ? 'is-active' : ''
                  } text-${navTextColour}`}
                  id="hamburgerIcon"
                >
                  <span className={`line bg-${navTextColour}`} />
                  <span className={`line bg-${navTextColour}`} />
                  <span className={`line bg-${navTextColour}`} />
                </div>
              </button>
            </div>
            <div
              className="w-full hidden md:flex md:items-center md:w-auto
              "
            >
              {navLinks
                ? navLinks.map((item, i) => (
                    <NavBarLink
                      item={item}
                      closeNav={this.closeNavBar}
                      key={i}
                      isNavFixed={isNavFixed}
                      isNavOpen={navOpen}
                      external
                    />
                  ))
                : null}
            </div>
          </div>
        </nav>
        <div className="overlay-menu" style={{ width: navOpen ? '100%' : '0' }}>
          <div className="overlay-menu-content">
            {navLinks
              ? navLinks.map((item, i) => (
                  <React.Fragment>
                    <div className="mt-12">
                      <NavBarLink
                        item={item}
                        closeNav={this.closeNavBar}
                        key={i}
                        isNavFixed
                        isNavOpen={navOpen}
                        external
                      />
                    </div>
                  </React.Fragment>
                ))
              : null}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
