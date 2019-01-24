import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBarLink = props => {
  const {
    item: { text, to, exact, external },
    isNavFixed,
  } = props;
  const classNames = `nav-item
  ${isNavFixed ? 'text-safe-green' : 'text-white'}
  block mt-4 mr-4 md:mt-0
  font-medium no-underline`;
  if (external)
    return (
      <a
        rel="noopener noreferrer"
        className={classNames}
        href="https://foodhubgm.trydiscourse.com/"
      >
        {text}
      </a>
    );
  return (
    <NavLink
      exact={exact}
      onClick={() => props.closeNav()}
      to={to}
      className={classNames}
    >
      {text}
    </NavLink>
  );
};

export default NavBarLink;
