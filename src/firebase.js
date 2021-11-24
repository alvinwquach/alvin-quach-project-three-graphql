import firebase from 'firebase/app';
import 'firebase/database';

// Initalize Firebase

const config = {

  apiKey: "AIzaSyB1Cw0ljuUQwloBJSs60uEZiUCWGyjspiM",

  authDomain: "expense-analyzer-2a071.firebaseapp.com",

  databaseURL: "https://expense-analyzer-2a071-default-rtdb.firebaseio.com",

  projectId: "expense-analyzer-2a071",

  storageBucket: "expense-analyzer-2a071.appspot.com",

  messagingSenderId: "1017611002161",

  appId: "1:1017611002161:web:4c09cd4ddc27dc6ea45010"

  };

  // Initialize Firebase

  firebase.initializeApp(config);

  export default firebase;