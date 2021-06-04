import React from 'react';
import { useSelector } from 'react-redux';

import {auth} from '../../firebase/firebase.utils';
import {sidebarData} from './sidebar.data';
import SidebarItem from '../sidebar-item/sidebar-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './sidebar.styles.scss';

export default function Sidebar({isActive, setIsSidebarActive}) {
  const {currentUser} = useSelector((state) => state.user);

  return (
    <div className={`${isActive ? 'sidebar active' : 'sidebar'}`}>
      <div className='sidebar-user'>
        <div className='avatar-container'>
          <img className='avatar' src={currentUser.photoURL} alt="User avatar"/>
        </div>
        <div className='sidebar-user-info'>
          <p className='name'>{currentUser.displayName}</p>
          <p className='email'>{currentUser.email}</p>
          {currentUser.isAdmin && <span className='group'>Administrator</span>}
        </div>
      </div>
      <ul className='sidebar-menu'>
        {sidebarData.map((sidebarItem) => <SidebarItem key={sidebarItem.id} data={sidebarItem} setIsSidebarActive={setIsSidebarActive}/>)}
      </ul>
      <CustomButton onClick={() => auth.signOut()} fluid='true' content='Logout'/>
    </div>
  );
}