import { auth } from "./firebase";

export const newCreateUserWithEmailAndPassword = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const anonSignIn = () =>
  auth.signInAnonymously().catch(error => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });

export const userSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const userSignOut = () => auth.signOut();

export const userPasswordReset = email => auth.sendPasswordResetEmail(email);

export const userPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);

export const userEmailUpdate = email => auth.currentUser.updateEmail(email);
