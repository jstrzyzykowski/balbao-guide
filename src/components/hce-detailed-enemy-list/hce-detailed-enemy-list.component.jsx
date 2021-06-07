import React from 'react';

import HceDetailedEnemyListItem from '../hce-detailed-enemy-list-item/hce-detailed-enemy-list-item.component';

import './hce-detailed-enemy-list.styles.scss';

export default function HceDetailedEnemyList({expedition}) {
  const {enemies} = expedition;

  return (
    <div className='enemy-list'>
      {enemies.map((enemy) => <HceDetailedEnemyListItem key={enemy.id} enemyData={enemy}/>)}
    </div>
  );
}