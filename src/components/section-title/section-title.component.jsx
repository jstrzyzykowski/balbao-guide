import React from 'react';

import './section-title.styles.scss';

export default function SectionTitle({content}) {
  return (
    <h2 className='section-title'>{content}</h2>
  );
}