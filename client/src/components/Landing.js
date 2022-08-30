import React from 'react';
import Type from './Type';
import PortfolioLanding from './PortfolioLanding';
import Intro from './Intro';

const Landing = () => {
  return (
    <div id='landing-container'>
      <Intro />
      <div style={{ paddingBottom: '15px' }}>
        <PortfolioLanding />
      </div>
      <Type />
    </div>
  );
};

export default Landing;
