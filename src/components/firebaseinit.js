import firebase from 'firebase/app';
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
