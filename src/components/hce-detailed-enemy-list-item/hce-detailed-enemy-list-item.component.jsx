import React from 'react';

import EnemyImage from '../../assets/hce-enemy-test.png';

import './hce-detailed-enemy-list-item.styles.scss';

export default function HceDetailedEnemyListItem({enemyData}) {
  
  const {name, difficulty, type} = enemyData;
  
  return (
    <div className='enemy-list-item'>
      <div className='enemy-image-container'>
        <img src={EnemyImage} alt="" />
      </div>
      <div className='enemy-text-container'>
        <h2 className='enemy-name'>{name}</h2>
        <span className={`${difficulty} enemy-difficulty`}>{difficulty}</span>
      </div>
      {type ? (
        <div className={`${type.name} enemy-type`}>
          <i className={`fas ${type.icon}`}></i>
        </div>
      ) : null}
    </div>
  );
}