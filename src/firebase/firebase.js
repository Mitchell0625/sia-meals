const firebase = require("firebase/app");
const config = {
  apiKey: `${REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "mealplan-app.firebaseapp.com",
  databaseURL: "https://mealplan-app.firebaseio.com",
  projectId: "mealplan-app",
  storageBucket: "mealplan-app.appspot.com",
  messagingSenderId: "30667524122"
};
firebase.initializeApp(config);

const database = firebase.database();
const auth = firebase.auth();
