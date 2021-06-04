import React from 'react';

import EnemyImage from '../../assets/hce-enemy-test.png';

import './hce-detailed-enemy-list-item.styles.scss';

export default function HceDetailedEnemyListItem({enemyData}) {
  
  const {name, uniqueName, difficulty, type} = enemyData;
  
  return (
    <div className='enemy-list-item'>
      <div className='enemy-image-container'>
        <img src={EnemyImage} alt="" />
      </div>
      <div className='enemy-text-container'>
        <h2 className='enemy-name'>{name}</h2>
        <span className={`${difficulty === 'easy' ? difficulty : ''} ${difficulty === 'normal' ? 'normal' : ''} ${difficulty === 'dangerous' ? 'dangerous' : ''} enemy-difficulty`}>{difficulty}</span>
      </div>
      {type === 'boss' ? (<div className='enemy-type boss'>
        <i class="fas fa-crown"></i>
      </div>) : null}
      {type === 'miniboss' ? (<div className='enemy-type miniboss'>
        <i class="fas fa-skull"></i>
      </div>) : null}
    </div>
  );
}