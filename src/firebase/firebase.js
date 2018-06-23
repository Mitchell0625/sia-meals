import * as firebase from "firebase";

// const firebase = require("firebase/app");
const config = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "mealplan-app.firebaseapp.com",
  databaseURL: "https://mealplan-app.firebaseio.com",
  projectId: "mealplan-app",
  storageBucket: "mealplan-app.appspot.com",
  messagingSenderId: "30667524122"
};
firebase.initializeApp(config);

const database = firebase.database();
const firestore = firebase.firestore();
const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export { auth, database };
