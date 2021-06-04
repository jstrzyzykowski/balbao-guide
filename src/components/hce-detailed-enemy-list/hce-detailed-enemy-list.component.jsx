import React from 'react';

import {expeditionsData} from '../../api/expeditionsData';
import HceDetailedEnemyListItem from '../hce-detailed-enemy-list-item/hce-detailed-enemy-list-item.component';

import './hce-detailed-enemy-list.styles.scss';

export default function HceDetailedEnemyList({hceUniqueName}) {
  
  const myHce = expeditionsData.find((expedition) => expedition.uniqueName === hceUniqueName);

  return (
    <div className='enemy-list'>
      {myHce.enemies.map((enemy) => <HceDetailedEnemyListItem key={enemy.id} enemyData={enemy}/>)}
    </div>
  );
}