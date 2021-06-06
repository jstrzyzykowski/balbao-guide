import React, {useState} from 'react'
import {toast} from 'react-toastify';

import {useDispatch} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import './form-sign-in.styles.scss';

export default function FormSignIn() {
  
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const {loginEmail, loginPassword} = signInData;

    try {
      await auth.signInWithEmailAndPassword(loginEmail, loginPassword);
      setSignInData({
        loginEmail: '',
        loginPassword: '',
      });
      toast.success(`😃 Nice to see you!`);
    } catch(error) {
      toast.error("🤔 Invalid email or password");
    }
  }

  return (
    <div className='form-sign-in'>
      <h2>Account Login</h2>
      <form onSubmit={handleSubmit}>
        <FormInput name='loginEmail' value={signInData.loginEmail} handleChange={handleChange} type="email" required label='Email'/>
        <FormInput name='loginPassword' value={signInData.loginPassword} handleChange={handleChange} type='password' required label='Password'/>
        <div className='buttons'>
          <CustomButton content='Login to your Account!' type='submit' fluid/>
          <CustomButton onClick={signInWithGoogle} content='Sign in with Google' type='button' fluid color='secondary'/>
        </div>
      </form>
    </div>
  );
}