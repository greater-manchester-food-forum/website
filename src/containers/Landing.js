import React from 'react';
import Home from '../components/Home';
import MissionSummary from '../components/OurMission/MissionSummary';
import ErrorBoundary from '../components/ErrorBoundary';

function Landing() {
  return (
    <React.Fragment>
      <Home />
      <MissionSummary />
    </React.Fragment>
  );
}

export default Landing;
