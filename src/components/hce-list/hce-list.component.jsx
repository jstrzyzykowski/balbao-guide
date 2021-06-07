import React from 'react';
import {createStructuredSelector} from 'reselect';
import {selectExpeditions} from '../../redux/expedition/expedition.selectors';
import { useSelector } from 'react-redux';

import HceItem from '../hce-item/hce-item.component';

import './hce-list.styles.scss';

export default function HceList() {
  
  const {expeditions} = useSelector(createStructuredSelector({expeditions: selectExpeditions}));

  return (
    <div className='hce-list'>
      <div className='hce-list-header'>
        <h2>Expeditions</h2>
        <p>Result: {expeditions.length}</p>
      </div>
      {expeditions.map((expedition) => <HceItem key={expedition.id} expeditionData={expedition}/>)}
    </div>
  );
}