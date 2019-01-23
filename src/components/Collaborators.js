import React from 'react';

function Collaborators({ logo, name, url }) {
  return (
    <div className="shadow-md bg-white text-grey-darkest text-xl md:flex items-center px-6 py-6 md:py-12 mb-6">
      <img src={logo} alt="logo" className="h-16 md:h-24 mr-4" />
      <div className="md:w-3/4 mx-auto">
        <h3>{name}</h3>
        <p className="text-sm pr-3 my-4 md:mb-0 md:mt-4">
          I am the collaborator description, I describe the collaborator. I am
          the collaborator description, I describe the collaborator. I am the
          collaborator description, I describe the collaborator.
        </p>
      </div>
      <a href={url} className="btn btn-green text-sm ml-auto no-underline">
        Visit
      </a>
    </div>
  );
}

export default Collaborators;
