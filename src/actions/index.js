import _ from 'lodash';
import fire from '../firebase';
import {
  // FETCH_AVATARS
} from '../actions/types';

export function actionLoginUser(uid) {
  return dispatch => {
    fire.database().ref(`users/${uid}`).once('value', snap => {
      const user = snap.val();
      dispatch({
        type: LOGIN_USER,
        payload: user
      });
    });
  }
}