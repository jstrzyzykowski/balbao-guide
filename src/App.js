import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './components/header/header.component';
import DashboardPage from './pages/page-dashboard/dashboard.component';
import HcePage from './pages/page-hce/hce.component';

import './App.css';

function App() {
  return (
    <>
      <Header/>
      <div className='page-container'>
        <Switch>
          <Route exact path='/' component={DashboardPage}/>
          <Route path='/hce' component={HcePage}/>
        </Switch>
      </div>
    </>
  );
}

export default App;
