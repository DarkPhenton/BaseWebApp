/* $(document).ready(function() {
  getWeather();
}) */
//import { GoogleAuthProvider } from "firebase/auth";
//import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
/*import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//src="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.js">

//<link type="text/css" rel="stylesheet" href="https://www.gstatic.com/firebasejs/ui/6.0.1/firebase-ui-auth.css" />

//import firebaseapp from 'firebase/app';
//import 'firebase/auth'; // This line is important


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// Sign in using a redirect.
//const provider = new GoogleAuthProvider();
// Start a sign in process for an unauthenticated user.
//provider.addScope('profile');
//provider.addScope('email');
//await signInWithRedirect(auth, provider);
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
*/

function handleSignIn() {
  

  var provider = new firebaseApp.auth.GoogleAuthProvider();

  firebaseApp.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    console.log(user.email);
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;

  });

  /*const auth = getAuth();
  signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log(user.email);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });*/

}

function getWeather(searchQuery) {
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+searchQuery+/*"lat=39&lon=-78*/"&units=imperial&appid="+ apiKey;

  $(".city").text("");
  $(".temp").text("");

  $.ajax(url,{success: function(data) {
    $(".city").text(data.name);
    $(".temp").text(data.main.temp);
  }, error: function(error) {
    $(".error-message").text("An error occurred");
  }})
}

function searchWeather() {
  var searchQuery = $(".search").val();
  getWeather(searchQuery);
}

function myFunction() {
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // jQuery can do a lot of crazy stuff so make sure to google around to find out more

  $("#demo").html("NEWWW PARAGRAPH #javascript #fire");

  // 'img-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#doge-image").append(`<img class="img-circle" src="images/wowdoge.jpeg" />`);
}

