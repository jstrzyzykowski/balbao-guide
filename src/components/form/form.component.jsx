import React, { useState } from 'react'
import FormSignIn from '../form-sign-in/form-sign-in.component';
import FormSignUp from '../form-sign-up/form-sign-up.component';

import './form.styles.scss';

export default function Form() {

  const [loginFormActive, setLoginFormActive] = useState(true);
  const [registerFormActive, setRegisterFormActive] = useState(false);

  const handleClickLogin = () => {
    setLoginFormActive(true);
    setRegisterFormActive(false)
  }

  const handleClickRegister = () => {
    setLoginFormActive(false);
    setRegisterFormActive(true)
  }

  return (
    <div className='form'>
      <div className='form-switch'>
        <button className={`${loginFormActive ? 'active' : ''} switch-login`} onClick={handleClickLogin}>Login</button>
        <button className={`${registerFormActive ? 'active' : ''} switch-register`} onClick={handleClickRegister}>Register</button>
      </div>
      <div className='form-container'>
        {loginFormActive && <FormSignIn/>}
        {registerFormActive && <FormSignUp/>}
      </div>
    </div>
  );
}