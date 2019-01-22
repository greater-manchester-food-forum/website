import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import NavBarLink from './NavBarLink';

function Navbar({
  scrollPosition,
  navLinks,
  navOpen,
  isNavFixed,
  closeNavBar,
  toggleNav,
}) {
  let navTextColour;
  if (navOpen || isNavFixed) {
    navTextColour = 'safe-green';
  } else {
    navTextColour = 'white';
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
              className={`text-4xl text-${navTextColour} font-bold tracking-tight`}
            >
              GMFF
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
