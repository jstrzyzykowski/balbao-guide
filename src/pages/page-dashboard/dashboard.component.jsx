import React from 'react';

import './dashboard.styles.scss';

export default function DashboardPage() {
  return (
    <div className='dashboard'>
      <div className='dashboard-text'>
        <h2 className='title'>Balbao</h2>
        <p className='description'>Your personal <span>HCE navigator</span></p>
      </div>
    </div>
  );
}