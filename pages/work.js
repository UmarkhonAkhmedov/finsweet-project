import React from 'react';
import BuildTogether from '../components/Work/BuildTogether';
import Filter from '../components/Work/Filter';
import Portfolio from '../components/Work/Portfolio';

function work() {
  return (
    <div>
      <Portfolio/>
      <Filter/>
      <BuildTogether/>
    </div>
  );
}

export default work;
