import React from 'react';
import { useHistory } from 'react-router';

import Image from '../../assets/hce-image.png';
import CustomButton from '../custom-button/custom-button.component';

import './hce-detailed-header.styles.scss';

export default function HceDetailedHeader({uniqueName}) {

  const history = useHistory();

  return (
    <div className="detailed-header">
      <CustomButton iconButton='true' onClick={() => {history.push('/hce')}}>
      <i class="fas fa-backward"></i>
      </CustomButton>
      <div className="header-image-container">
        <img src={Image} alt="" />
      </div>
      <div className="header-text">
        <h2 className="text-title">Preaching to the Death</h2>
        <div className='text-container'>
          <p className='monster-type'>Morgana</p>
          <p className="difficulty">
            <i class="fas fa-skull"></i>
            <span>4/5</span>
          </p>
        </div>
      </div>
    </div>
  );
}
