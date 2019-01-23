import React from 'react';

function Collaborators({ logo, name }) {
  return (
    <div className="shadow-md bg-white text-grey-darkest text-xl flex items-center px-6 py-12 mb-6">
      <img src={logo} alt="logo" className="h-24 mr-4" />
      <div className="md:w-3/4 mx-auto">
        <h3>{name}</h3>
        <p className="text-sm pr-3 mt-4">
          I am the collaborator description, I describe the collaborator. I am
          the collaborator description, I describe the collaborator. I am the
          collaborator description, I describe the collaborator.
        </p>
      </div>
      <button className="btn btn-green text-sm ml-auto" type="button">
        Visit
      </button>
    </div>
  );
}

export default Collaborators;
