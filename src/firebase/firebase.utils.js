import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBzbBBeuEcAim-fSLbySCACWTWksm3jFwM",
    authDomain: "crwn-db-d479b.firebaseapp.com",
    databaseURL: "https://crwn-db-d479b.firebaseio.com",
    projectId: "crwn-db-d479b",
    storageBucket: "crwn-db-d479b.appspot.com",
    messagingSenderId: "367161965670",
    appId: "1:367161965670:web:3b401123c9d64c468681a7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;