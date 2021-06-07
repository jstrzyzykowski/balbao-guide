import React, {useEffect} from 'react';
import {Redirect, Route} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {ToastContainer} from 'react-toastify';

import LandingPage from './pages/page-landing/landing.component';
import Header from './components/header/header.component';
import DashboardPage from './pages/page-dashboard/dashboard.component';
import HcePage from './pages/page-hce/hce.component';
import HceDetailedPage from './pages/page-hce-detailed/hce-detailed.component';

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  // Reselect: currentUser
  const {currentUser} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          dispatch(setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          }));
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }

      return () => {
        unsubscribeFromAuth();
      };
    })
  }, [dispatch]);

  return (
    <>
      <ToastContainer position='bottom-left' autoClose={3000} hideProgressBar newestOnTop closeOnClick pauseOnHover={false}/>
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
