import React from 'react';
import NavBarLink from './NavBarLink';

function MobileNavbar({ navOpen, navLinks, closeNavBar }) {
  return (
    <div className="overlay-menu" style={{ width: navOpen ? '100%' : '0' }}>
      <div
        className={`overlay-menu-content ${navOpen ? 'fade-in' : 'fade-out'}`}
      >
        {navLinks &&
          navLinks.map((item, i) => (
            <div className="mt-12" key={i}>
              <NavBarLink
                item={item}
                closeNav={closeNavBar}
                isNavFixed
                isNavOpen={navOpen}
                external
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default MobileNavbar;
