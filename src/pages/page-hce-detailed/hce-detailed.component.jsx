import React from 'react';

import './hce-detailed.styles.scss';

export default function HceDetailedPage({match}) {
  
  const {uniqueName} = match.params;

  return (
    <div className='hce-detailed'>
      <h2>{uniqueName}</h2>
    </div>
  );
}