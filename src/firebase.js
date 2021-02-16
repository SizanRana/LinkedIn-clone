import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaj5vwwBL7HPVVaeJSwLH3BabHl4yDj4o",
  authDomain: "spotify-clone-2c8a8.firebaseapp.com",
  projectId: "spotify-clone-2c8a8",
  storageBucket: "spotify-clone-2c8a8.appspot.com",
  messagingSenderId: "655199550984",
  appId: "1:655199550984:web:09ff6c624aa309c1439bbd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
