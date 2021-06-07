import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Image from '../../assets/hce-image.png';
import CustomButton from '../custom-button/custom-button.component';

import './hce-item.styles.scss';

export default function HceItem({expeditionData}) {

  const history = useHistory();
  const match = useRouteMatch();
  const {title, difficulty, uniqueName} = expeditionData;

  const MAX_DIFFICULTY = 5;

  return (
    <div className='hce-item'>
      <div className='hce-item-image-container'>
        <img src={Image} alt="" />
      </div>
      <div className='hce-item-header'>
        <h2 className='title'>{title}</h2>
        <p className='difficulty'>
          <i className="fas fa-skull"></i>
          <span>{difficulty}/{MAX_DIFFICULTY}</span>
        </p>
      </div>
      <CustomButton onClick={() => history.push(`${match.path}/${uniqueName}`)}>
        <i className="fas fa-book"></i>
      </CustomButton>
    </div>
  );
}