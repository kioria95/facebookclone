import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoUUfrrV_0AM3TZGH7jDnYGtY1zLXDJwE",
    authDomain: "facebook-clone-d6cb0.firebaseapp.com",
    databaseURL: "https://facebook-clone-d6cb0.firebaseio.com",
    projectId: "facebook-clone-d6cb0",
    storageBucket: "facebook-clone-d6cb0.appspot.com",
    messagingSenderId: "998081492604",
    appId: "1:998081492604:web:6f3ba602a9083629e63bf9",
    measurementId: "G-3KV39B4DZS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
