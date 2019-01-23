import React from 'react';

function Collaborators({ logo, name }) {
  return (
    <div className="shadow-md bg-white text-grey-darkest text-xl flex items-center px-6 py-4">
      <img src={logo} alt="logo" className="h-16 mr-4" />
      <div>
        <h3>{name}</h3>
        <p>test</p>
      </div>
      <button className="btn btn-green">test</button>
    </div>
  );
}

export default Collaborators;
