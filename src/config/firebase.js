import * as firebase from 'firebase';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDkvL3TWX9jru6RSdcAOv_RZsKgAy7pfpU",
  authDomain: "token-sport.firebaseapp.com",
  databaseURL: "https://token-sport.firebaseio.com",
  projectId: "token-sport",
  storageBucket: "token-sport.appspot.com",
  messagingSenderId: "707408691241"
};

// Initialize Firebase
firebase.initializeApp(FIREBASE_CONFIG);

export default firebase.firestore();