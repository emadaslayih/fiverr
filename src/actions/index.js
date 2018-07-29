// import _ from 'lodash';
import fire from '../firebase';
import {
  FETCH_DONATION_ITEMS,
  FETCH_ITEM
} from '../actions/types';

export function actionFetchDonationItems() {
  return dispatch => {
    fire.database().ref(`donationItems`).once('value', snap => {
      const donationItems = snap.val();
      dispatch({
        type: FETCH_DONATION_ITEMS,
        payload: donationItems
      });
    });
  }
}

export function actionFetchItem(id, callback) {
  return dispatch => {
    fire.database().ref(`donationItems/${id}`).once('value', snap => {
      const donationItem = snap.val();
      dispatch({
        type: FETCH_ITEM,
        payload: donationItem
      });
      callback();
    });
  }
}