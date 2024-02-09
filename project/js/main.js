// import { initializeApp } from 'firebase/app'
// import { getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
// import { getDatabase} from 'firebase/database';

// const firebaseApp = initializeApp(firebaseConfig);
// const auth = getAuth(firebaseApp);
// const db = getDatabase(firebaseApp);

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




// // Initialize Realtime Database and get a reference to the service
const database = getDatabase(firebaseApp);
export default firebaseApp;

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