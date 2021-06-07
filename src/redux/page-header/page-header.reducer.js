import {headersData} from '../../api/headersData';

const initialState = {
  pageHeaders: headersData,
}

export default function pageHeaderReducer(state = initialState, {type, payload}) {
  switch (type) {
    default:
      return state;
  }
}