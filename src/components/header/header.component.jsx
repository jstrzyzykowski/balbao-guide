import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Sidebar from '../sidebar/sidebar.component';

import './header.styles.scss';

export default function Header() {

  const [isSidebarActive, setIsSidebarActive] = useState(false);

  return (
    <div className='header'>
      <div className="header-container">
        <Link className='logo' to='/dashboard'>
          Balbao
        </Link>
        <div className='header-mobile-button' onClick={() => setIsSidebarActive((prevValue) => !prevValue)}>
          {isSidebarActive ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </div>
        <Sidebar isActive={isSidebarActive} setIsSidebarActive={setIsSidebarActive}/>
      </div>
    </div>
  );
}
