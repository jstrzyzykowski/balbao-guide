import React, {useState} from 'react'
import {toast} from 'react-toastify';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './form-sign-up.styles.scss';

export default function FormSignUp() {

  const [signUpData, setSignUpData] = useState({
    registerDisplayName: '',
    registerEmail: '',
    registerPassword: '',
    registerConfirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {registerDisplayName, registerEmail, registerPassword, registerConfirmPassword} = signUpData;

    if(registerPassword !== registerConfirmPassword) {
      toast.dark("🤔 Password doesn't match", {
        style: {backgroundColor: '#2f2f2f'}
      });
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(registerEmail, registerPassword);
      const displayName = registerDisplayName;

      await createUserProfileDocument(user, { displayName });

      setSignUpData({
        registerDisplayName: '',
        registerEmail: '',
        registerPassword: '',
        registerConfirmPassword: '',
      });
      toast.success('Account created!');

    } catch(error) {
      toast.error(error);
    }
  }

  const handleChange = (e) => {
    const {name, value} = e.target;

    setSignUpData({
      ...signUpData,
      [name]: value,
    });
  }

  return (
    <div className='form-sign-up'>
      <h2>Create your Account!</h2>
      <form onSubmit={handleSubmit}>
        <FormInput name='registerDisplayName' value={signUpData.registerDisplayName} handleChange={handleChange} type="text" required label='Display Name'/>
        <FormInput name='registerEmail' value={signUpData.registerEmail} handleChange={handleChange} type='email' required label='Email'/>
        <FormInput name='registerPassword' value={signUpData.registerPassword} handleChange={handleChange} type='password' required label='Password'/>
        <FormInput name='registerConfirmPassword' value={signUpData.registerConfirmPassword} handleChange={handleChange} type='password' required label='Confirm Password'/>
        <div className='buttons'>
          <CustomButton content='Register Now!' type='submit' fluid/>
        </div>
      </form>
    </div>
  );
}