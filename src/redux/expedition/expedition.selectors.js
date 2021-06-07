import {createSelector} from 'reselect';

const selectExpedition = (state) => state.expedition;

export const selectExpeditions = createSelector(
  [selectExpedition],
  (expedition) => expedition.expeditions
);