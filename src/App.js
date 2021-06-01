import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Header from './components/header/header.component';
import DashboardPage from './pages/page-dashboard/dashboard.component';
import HcePage from './pages/page-hce/hce.component';
import HceDetailedPage from './pages/page-hce-detailed/hce-detailed.component';

import './App.css';

function App() {
  return (
    <>
      <Header/>
      <div className='page-container'>
        <Switch>
          <Route exact path='/' component={DashboardPage}/>
          <Route exact path='/hce' component={HcePage}/>
          <Route path='/hce/:uniqueName' component={HceDetailedPage}/>
        </Switch>
      </div>
    </>
  );
}

export default App;
