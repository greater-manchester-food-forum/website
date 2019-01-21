import React from 'react';

function Collaborators({ logo, name }) {
  return (
    <div className="border border-grey text-grey-darkest text-xl flex items-center px-6 py-4">
      <img src={logo} alt="logo" className="h-16 mr-4" />
      <h3>{name}</h3>
    </div>
  );
}

export default Collaborators;
