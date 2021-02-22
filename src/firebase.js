import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAqu3baFgDz-voTfbR-RnXP03eLnXafHPw",
  authDomain: "slack-lookalike-7d7ed.firebaseapp.com",
  projectId: "slack-lookalike-7d7ed",
  storageBucket: "slack-lookalike-7d7ed.appspot.com",
  messagingSenderId: "133615597595",
  appId: "1:133615597595:web:5873de42c65c9828eae0be",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
