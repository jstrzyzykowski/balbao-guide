import React from 'react'

import {createStructuredSelector} from 'reselect';
import {selectSignIn, selectSignUp} from '../../redux/landing-form/landing-form.selectors';

import { useSelector, useDispatch } from 'react-redux';
import {setSignInActive, setSignUpActive} from '../../redux/landing-form/landing-form.actions';

import FormSignIn from '../form-sign-in/form-sign-in.component';
import FormSignUp from '../form-sign-up/form-sign-up.component';

import './form.styles.scss';

export default function Form() {
  const {signIn, signUp} = useSelector(createStructuredSelector({signIn: selectSignIn, signUp: selectSignUp}));
  const dispatch = useDispatch();

  return (
    <div className='form'>
      <div className='form-switch'>
        <button className={`${signIn ? 'active' : ''} switch-login`} onClick={() => dispatch(setSignInActive())}>Login</button>
        <button className={`${signUp ? 'active' : ''} switch-register`} onClick={() => dispatch(setSignUpActive())}>Register</button>
      </div>
      <div className='form-container'>
        {signIn ? <FormSignIn/> : <FormSignUp/>}
      </div>
    </div>
  );
}