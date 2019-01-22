import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import NavBarLink from './NavBarLink';
import gmffLogoWhite from '../../images/logo-white.png';
import gmffLogoGreen from '../../images/logo-green.png';
import gmffLogoBlue from '../../images/gmff-logo-blue.png';
import gmffLogoOutline from '../../images/gmff-logo-outline.png';
import bee from '../../images/bee.png';
import potentialLogo from '../../images/potential-logo.png';

function Navbar({
  scrollPosition,
  navLinks,
  navOpen,
  isNavFixed,
  closeNavBar,
  toggleNav,
}) {
  let navTextColour;
  let logo;
  if (navOpen || isNavFixed) {
    navTextColour = 'safe-green';
    logo = gmffLogoGreen;
  } else {
    navTextColour = 'white';
    logo = gmffLogoWhite;
  }

  return (
    <React.Fragment>
      <nav
        id="nav"
        className={`
          ${classNames({
          'navbar-hidden-before-scroll': scrollPosition > 75,
          'fixed bg-white fixed-nav': isNavFixed,
          absolute: !isNavFixed,
        })} w-full z-50 pin-t bg-transparent px-6 md:px-12 py-6 mb-6`}
      >
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <Link
            onClick={closeNavBar}
            to="/"
            className="flex items-center text-white no-underline cursor-pointer"
          >
            <span
              className={`text-xl text-${navTextColour} font-bold tracking-tight`}
            >
              <div className="flex items-center">
                <img src={logo} alt="gmff-logo" className="h-12 mr-3" />
                <div className="flex flex-col">
                  <p className="greater-manchester hidden md:block">
                    Greater Manchester
                  </p>
                  <p className="food-forum hidden md:block">Food Forum</p>
                </div>
              </div>
            </span>
          </Link>

          <div className="block md:hidden outline-none">
            <button
              style={{ outline: 'none' }}
              onClick={toggleNav}
              className={`
                text-${navTextColour} border-${navTextColour}
                  flex items-center outline-none
                  px-3 py-2  
                  rounded`}
              type="button"
            >
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
          <div className="w-full hidden md:flex md:items-center md:w-auto">
            {navLinks
              ? navLinks.map((item, i) => (
                <NavBarLink
                  item={item}
                  closeNav={closeNavBar}
                  key={i}
                  isNavFixed={isNavFixed}
                  isNavOpen={navOpen}
                />
              ))
              : null}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
