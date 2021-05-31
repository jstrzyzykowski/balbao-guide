import React from 'react';
import { NavLink } from 'react-router-dom';

import './sidebar-item.styles.scss';

export default function SidebarItem({data, setIsSidebarActive}) {
  return (
    <li className='sidebar-item'>
      <NavLink exact to={data.linkUrl} className='sidebar-link' onClick={() => {setIsSidebarActive(false)}}>
        <i className={data.icon}></i>
        <p className='sidebar-item-text'>{data.title}</p>
      </NavLink>
    </li>
  );
}