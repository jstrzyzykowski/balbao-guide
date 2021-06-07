import {SET_SIGN_IN_ACTIVE, SET_SIGN_UP_ACTIVE} from './landing-form.types';

const initialState = {
  formPages: {
    signIn: true,
    signUp: false,
  }
}

export default function landingFormReducer(state = initialState, {type, payload}) {
  switch (type) {
    case SET_SIGN_IN_ACTIVE:
      return {
        formPages: {
          signIn: true,
          signUp: false,
        }
      };
    case SET_SIGN_UP_ACTIVE:
      return {
        formPages: {
          signIn: false,
          signUp: true,
        }
      };
    default:
      return state;
  }
}