import * as firebase from 'firebase';
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyCJDh6X1L1G324Qj3rlTkaFRve4LqBMiYo",
    authDomain: "willy-3b814.firebaseapp.com",
    projectId: "willy-3b814",
    storageBucket: "willy-3b814.appspot.com",
    messagingSenderId: "1086170017669",
    appId: "1:1086170017669:web:686d7bad8fd4f05ff11eec"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();