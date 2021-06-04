import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import { useSelector } from 'react-redux';

import LandingPage from './pages/page-landing/landing.component';
import Header from './components/header/header.component';
import DashboardPage from './pages/page-dashboard/dashboard.component';
import HcePage from './pages/page-hce/hce.component';
import HceDetailedPage from './pages/page-hce-detailed/hce-detailed.component';

import './App.css';

function App() {

  const {currentUser} = useSelector((state) => state.user);

  return (
    <>
      <Route exact path='/' render={() => currentUser ? <Redirect to='/dashboard'/> : <LandingPage/>}/>
      <Route path={'/(.+)'} render={() => currentUser ? (
        <>
        <Header/>
        <div className='page-container'>
          <Route exact path='/dashboard' component={DashboardPage}/>
          <Route exact path='/hce' component={HcePage}/>
          <Route path='/hce/:uniqueName' component={HceDetailedPage}/>
        </div>
        </>
      ) : <Redirect to='/'/>}/>
    </>
  );
}

export default App;
