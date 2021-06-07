import React from 'react';

import './custom-button.styles.scss';

export default function CustomButton({iconButton, children, fluid, color, content, ...props}) {

  return (
    <button className={`${fluid ? 'fluid' : ''} ${color ? color : 'primary'} ${iconButton ? 'iconButton' : ''} custom-button`} {...props}>
      {children ? children : content}
    </button>
  );
}