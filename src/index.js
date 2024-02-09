// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import { getDatabase} from 'firebase/database';

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getDatabase(firebaseApp)

export function handleSignIn() {
  
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
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
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js">

//<link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Sign in using a redirect.
// const provider = new GoogleAuthProvider();
// // Start a sign in process for an unauthenticated user.
// provider.addScope('profile');
// provider.addScope('email');
// await signInWithRedirect(auth, provider);
// // This will trigger a full page redirect away from your app

// // After returning from the redirect when your app initializes you can obtain the result
// const result = await getRedirectResult(auth);
// if (result) {
//   // This is the signed-in user
//   const user = result.user;
//   // This gives you a Google Access Token.
//   const credential = GoogleAuthProvider.credentialFromResult(result);
//   const token = credential.accessToken;
// }
// // Initialize Firebase






// const getAnalytics = getAnalytics(firebaseApp);
// // Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(firebaseApp);

// auth.onAuthStateChanged(user => {

// });
// onAuthStateChanged(auth, user => {
//     if(user != null) {
//         console.log('logged in!');
//     } else {
//         console.log('No user');
//     }
// // Check for user status
// });
// // Initialize Realtime Database and get a reference to the service
// const database = getDatabase(firebaseApp);
// export default firebaseApp;