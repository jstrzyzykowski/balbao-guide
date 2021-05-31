import React from 'react';

import {sidebarData} from './sidebar.data';
import SidebarItem from '../sidebar-item/sidebar-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './sidebar.styles.scss';

export default function Sidebar({isActive, setIsSidebarActive}) {
  return (
    <div className={`${isActive ? 'sidebar active' : 'sidebar'}`}>
      <div className='sidebar-user'>
        <div className='avatar-container'>
          <img className='avatar' src="https://randomuser.me/api/portraits/men/20.jpg" alt="User avatar"/>
        </div>
        <div className='sidebar-user-info'>
          <p className='name'>John Doe</p>
          <p className='email'>johndoe@gmail.com</p>
        </div>
      </div>
      <ul className='sidebar-menu'>
        {sidebarData.map((sidebarItem) => <SidebarItem key={sidebarItem.id} data={sidebarItem} setIsSidebarActive={setIsSidebarActive}/>)}
      </ul>
      <CustomButton onClick={() => console.log('Wylogowanie')} fluid='true'>
        Logout
      </CustomButton>
    </div>
  );
}