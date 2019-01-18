import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLink = props => {
  const {
    item: { text, to, exact },
    external,
    isNavFixed,
  } = props;
  return (
    <NavLink
      exact={exact}
      onClick={() => props.closeNav()}
      to={to}
      className={`nav-item
      ${isNavFixed ? 'text-safe-green' : 'text-white'}
      block mt-4 mr-4 md:mt-0
      font-medium no-underline`}
    >
      {text}
    </NavLink>
  );
};

export default NavBarLink;
