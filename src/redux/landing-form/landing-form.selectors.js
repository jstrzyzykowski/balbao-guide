import { createSelector } from "reselect";

const selectLandingForm = (state) => state.landingForm;

const selectFormPages = createSelector(
  [selectLandingForm],
  (landingForm) => landingForm.formPages 
);

export const selectSignIn = createSelector(
  [selectFormPages],
  (formPages) => formPages.signIn
);

export const selectSignUp = createSelector(
  [selectFormPages],
  (formPages) => formPages.signUp
);
