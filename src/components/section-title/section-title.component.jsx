import React from 'react';

import './section-title.styles.scss';

export default function SectionTitle({content}) {
  return (
    <div className='section-title'>
      <div className='line'/>
        <h2 className='title'>{content}</h2>
      <div className='line'/>
    </div>
  );
}