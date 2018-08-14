import { auth } from "./firebase";

export const userSignInWithEmailAndPassword = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const userSignOut = () => auth.signOut();

export const userPasswordReset = email => auth.sendPasswordResetEmail(email);

export const userPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);

export const userEmailUpdate = email => auth.currentUser.updateEmail(email);
