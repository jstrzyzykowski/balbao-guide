import {SET_SIGN_IN_ACTIVE, SET_SIGN_UP_ACTIVE} from './landing-form.types';

export const setSignInActive = () => {
  return {
    type: SET_SIGN_IN_ACTIVE,
  }
}

export const setSignUpActive = () => {
  return {
    type: SET_SIGN_UP_ACTIVE
  }
}