import { combineReducers } from 'redux';
import donationItems from './reducer_donation_items';
import currentItem from './reducer_current_donation_item';

const rootReducer = combineReducers({
  donationItems,
  currentItem
});

export default rootReducer;