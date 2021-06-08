import React from 'react';
import { useHistory } from 'react-router';

// import Image from '../../assets/hce-image.png';
import CustomButton from '../custom-button/custom-button.component';

import './hce-detailed-header.styles.scss';

export default function HceDetailedHeader({expedition}) {
  
  const history = useHistory();
  const {title, difficulty, mobType, loadingPhotoURL} = expedition;
  
  const MAX_DIFFICULTY = 5;

  return (
    <div className="detailed-header">
      <CustomButton iconButton='true' onClick={() => {history.push('/hce')}}>
      <i className="fas fa-backward"></i>
      </CustomButton>
      <div className="header-image-container">
        <img src={loadingPhotoURL} alt="" />
      </div>
      <div className="header-text">
        <h2 className="text-title">{title}</h2>
        <div className='text-container'>
          <span className='monster-type'>{mobType}</span>
          <p className="difficulty">
            <i className="fas fa-skull"></i>
            <span>{difficulty}/{MAX_DIFFICULTY}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
