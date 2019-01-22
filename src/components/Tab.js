/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import classNames from 'classnames';

export default function Tab({ id, title, active, onClick }) {
  return (
    <li className={`mr-1 ${classNames({ '-mb-px': active })}`}>
      <a
        onClick={() => onClick(id)}
        className={`bg-white inline-block ${classNames({
          'border-l border-t border-r': active,
        })}  rounded-t py-2 px-4 text-blue-dark font-semibold no-underline`}
        href="#"
      >
        {title}
      </a>
    </li>
  );
}
