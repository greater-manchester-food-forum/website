import React from 'react';
import Navbar from './Navbar';

function FixedNavbar({
  scrollPosition,
  navLinks,
  navOpen,
  closeNavBar,
  toggleNav,
}) {
  return (
    <div>
      <Navbar
        scrollPosition={scrollPosition}
        navLinks={navLinks}
        navOpen={navOpen}
        isNavFixed
        closeNavBar={closeNavBar}
        toggleNav={toggleNav}
      />
    </div>
  );
}

export default FixedNavbar;
