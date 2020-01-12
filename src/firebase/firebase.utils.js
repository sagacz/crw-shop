import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyABEolCU9XZt8eJmxR3UDEynNoWJixQQoM",
    authDomain: "crwn-db-85fbb.firebaseapp.com",
    databaseURL: "https://crwn-db-85fbb.firebaseio.com",
    projectId: "crwn-db-85fbb",
    storageBucket: "crwn-db-85fbb.appspot.com",
    messagingSenderId: "670136697140",
    appId: "1:670136697140:web:ed1dcafa1a14bfc49fe561",
    measurementId: "G-HNPCWKT6BM"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;