import React from 'react';

import {expeditionsData} from '../../api/expeditionsData';
import HceItem from '../hce-item/hce-item.component';

import './hce-list.styles.scss';

export default function HceList() {
  return (
    <div className='hce-list'>
      <div className='hce-list-header'>
        <h2>Expeditions</h2>
        <p>Result: {expeditionsData.length}</p>
      </div>
      {expeditionsData.map((expedition) => <HceItem key={expedition.id} data={expedition}/>)}
    </div>
  );
}