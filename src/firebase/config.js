  import firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyA5b4_myFx9RNc_ys2Wla9xh1GDHpsKnKA",
    authDomain: "firegram-25a34.firebaseapp.com",
    projectId: "firegram-25a34",
    storageBucket: "firegram-25a34.appspot.com",
    messagingSenderId: "302692365727",
    appId: "1:302692365727:web:2318320069eaf68305f9aa"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };