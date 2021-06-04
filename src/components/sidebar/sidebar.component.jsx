import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {setCurrentUser} from '../../redux/user/user.actions';

import {sidebarData} from './sidebar.data';
import SidebarItem from '../sidebar-item/sidebar-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './sidebar.styles.scss';

export default function Sidebar({isActive, setIsSidebarActive}) {

  const dispatch = useDispatch();
  const {currentUser} = useSelector((state) => state.user);

  return (
    <div className={`${isActive ? 'sidebar active' : 'sidebar'}`}>
      <div className='sidebar-user'>
        <div className='avatar-container'>
          <img className='avatar' src="https://randomuser.me/api/portraits/men/20.jpg" alt="User avatar"/>
        </div>
        <div className='sidebar-user-info'>
          <p className='name'>John Doe</p>
          <p className='email'>{currentUser.email}</p>
        </div>
      </div>
      <ul className='sidebar-menu'>
        {sidebarData.map((sidebarItem) => <SidebarItem key={sidebarItem.id} data={sidebarItem} setIsSidebarActive={setIsSidebarActive}/>)}
      </ul>
      <CustomButton onClick={() => dispatch(setCurrentUser(null))} fluid='true' content='Logout'/>
    </div>
  );
}