// import _ from 'lodash';
import { FETCH_ITEM } from '../actions/types';

export default function(state = {}, action) {
  // let newState = state;
  switch (action.type) {
    case FETCH_ITEM:
      return action.payload;
    default:
      return state;
  }
}