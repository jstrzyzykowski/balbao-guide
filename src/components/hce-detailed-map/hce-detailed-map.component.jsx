import React from 'react';

import MapImage from '../../assets/hce-map.png';

import './hce-detailed-map.styles.scss';

export default function HceDetailedMap() {
  return (
    <div className='detailed-map'>
      <div className='map-container'>
        <img src={MapImage} alt="" />
      </div>
    </div>
  );
}