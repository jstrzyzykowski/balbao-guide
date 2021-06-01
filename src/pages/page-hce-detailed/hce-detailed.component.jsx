import React from 'react';

import HceDetailedHeader from '../../components/hce-detailed-header/hce-detailed-header.component';
import HceDetailedMap from '../../components/hce-detailed-map/hce-detailed-map.component';

import './hce-detailed.styles.scss';

export default function HceDetailedPage({match}) {
  
  const {uniqueName} = match.params;

  return (
    <div className='hce-detailed'>
      <HceDetailedHeader uniqueName={uniqueName}/>
      <HceDetailedMap/>
    </div>
  );
}