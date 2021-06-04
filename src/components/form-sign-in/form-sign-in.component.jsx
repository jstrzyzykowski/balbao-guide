import React, {useState} from 'react'

import {useDispatch} from 'react-redux';
import {setCurrentUser} from '../../redux/user/user.actions';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './form-sign-in.styles.scss';

export default function FormSignIn() {

  const dispatch = useDispatch();

  const [signInData, setSignInData] = useState({
    loginEmail: '',
    loginPassword: '',
  });

  const handleChange = (e) => {
    const {value, name} = e.target;

    setSignInData({
      ...signInData,
      [name]: value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: signInData.loginEmail,
      password: signInData.loginPassword,
    }

    dispatch(setCurrentUser(user));
  }

  return (
    <div className='form-sign-in'>
      <h2>Account Login</h2>
      <form onSubmit={handleSubmit}>
        <FormInput name='loginEmail' value={signInData.loginEmail} handleChange={handleChange} type="email" required label='Email'/>
        <FormInput name='loginPassword' value={signInData.loginPassword} handleChange={handleChange} type='password' required label='Password'/>
        <div className='buttons'>
          <CustomButton content='Login to your Account!' type='submit' fluid/>
          <CustomButton content='Sign in with Google' type='button' fluid color='secondary'/>
        </div>
      </form>
    </div>
  );
}