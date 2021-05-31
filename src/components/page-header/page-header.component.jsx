import React from 'react';

import './page-header.styles.scss';

export default function PageHeader({title, description}) {
  return (
    <div className='page-header'>
      <h2 className='title'>{title}</h2>
      <p className='description'>{description}</p>
    </div>
  );
}