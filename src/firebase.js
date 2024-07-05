import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAcyQvmlpsYSBCYwHRtgIks7qaE9ERZ3FQ",
  authDomain: "dislathepk.firebaseapp.com",
  databaseURL: "https://dislathepk-default-rtdb.firebaseio.com",
  projectId: "dislathepk",
  storageBucket: "dislathepk.appspot.com",
  messagingSenderId: "1041905922832",
  appId: "1:1041905922832:web:99a23a2d25f0a02edfab95",
  measurementId: "G-CRJN94P9ZZ"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const auth = app.auth();

export {db};
export default app;