import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBtO2CQY-rwC8mxzxzNjzTNqLs7igx8HR8",
  authDomain: "fiverr-c2dab.firebaseapp.com",
  databaseURL: "https://fiverr-c2dab.firebaseio.com",
  projectId: "fiverr-c2dab",
  storageBucket: "fiverr-c2dab.appspot.com",
  messagingSenderId: "356744254921"
};
const fire = firebase.initializeApp(config);
export default fire;