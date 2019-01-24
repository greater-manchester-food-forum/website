import React from 'react';
import { Link } from 'react-router-dom';
import fullScreenImage from '../images/pineapple.jpg';

const buttonClasses = 'inline-block btn btn-white no-underline px-4 py-2 mt-6';

const Error = ({
  title = '404',
  message = 'Page Not Found.',
  showButton = true,
}) => (
  <div
    className="py-8 h-screen home-screen-image flex items-center"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${fullScreenImage})`,
    }}
  >
    <div className="text-red-light px-6 py-4 w-full text-center">
      <i className="fas fa-4x fa-exclamation-triangle" />
      <h1 className="text-white text-6xl mt-3">{title}</h1>
      <p className="text-grey-light text-2xl mt-2">{message}</p>
      {showButton ? (
        <Link to="/" className={buttonClasses}>
          Home
        </Link>
      ) : null}
    </div>
  </div>
);

export default Error;
