import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLink = props => {
  const {
    item: { text, to, exact },
    external,
  } = props;
  return (
    <NavLink
      exact={exact}
      onClick={() => props.closeNav()}
      to={to}
      className="nav-item
      block mt-4 mr-4 md:mt-0
      text-grey-light font-medium no-underline"
    >
      {text}
    </NavLink>
  );
};

export default NavBarLink;
