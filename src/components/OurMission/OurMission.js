import React from 'react';
import Mission from './Mission';
import collab from '../../images/collab.jpeg';

function OurMission() {
  return (
    <React.Fragment>
      <div className="py-20 container mx-auto" id="mission-statement">
        <h2 className="text-5xl font-bold tracking-tight leading-tight text-safe-green text-center mb-12">
          Our Mission
        </h2>
        <div className="mission-grid">
          <Mission title="Collaboration" image={collab} desc="" />
          <Mission title="Food Access" image={collab} desc="" />
          <Mission title="Local Business" image={collab} desc="" />
          <Mission title="Health" image={collab} desc="" />
        </div>
      </div>
    </React.Fragment>
  );
}

export default OurMission;
