// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js">

//<link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />

//import firebaseapp from 'firebase/app';
//import 'firebase/auth'; // This line is important


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Sign in using a redirect.
const provider = new GoogleAuthProvider();
// Start a sign in process for an unauthenticated user.
provider.addScope('profile');
provider.addScope('email');
await signInWithRedirect(auth, provider);
// This will trigger a full page redirect away from your app

// After returning from the redirect when your app initializes you can obtain the result
const result = await getRedirectResult(auth);
if (result) {
  // This is the signed-in user
  const user = result.user;
  // This gives you a Google Access Token.
  const credential = GoogleAuthProvider.credentialFromResult(result);
  const token = credential.accessToken;
}


const firebaseConfig = {
  authDomain: "message-stream-aadd0.firebaseapp.com",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://message-stream-aadd0-default-rtdb.firebaseio.com",
  projectId: "message-stream-aadd0",
  storageBucket: "message-stream-aadd0.appspot.com",
  messagingSenderId: "568130129310",
  appId: "1:568130129310:web:7eaf7009be51f675ce1a8f",
  measurementId: "G-5BZ7SF51HV"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const getAnalytics = getAnalytics(firebaseApp);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

auth.onAuthStateChanged(user => {

});
onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log('logged in!');
    } else {
        console.log('No user');
    }
// Check for user status
});
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseApp);
export default firebaseApp;