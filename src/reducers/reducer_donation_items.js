import _ from 'lodash';
import { FETCH_DONATION_ITEMS } from '../actions/types';

export default function(state = [], action) {
  // let newState = state;
  switch (action.type) {
    case FETCH_DONATION_ITEMS:
      return _.values(action.payload);
    default:
      return state;
  }
}