import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAU5o8Y_tCYtixaUX_YqhoK4_-hlmshHmY",
  authDomain: "myprotfolio-project.firebaseapp.com",
  databaseURL: "https://myprotfolio-project.firebaseio.com",
  projectId: "myprotfolio-project",
  storageBucket: "myprotfolio-project.appspot.com",
  messagingSenderId: "354664926376"
};
firebase.initializeApp(config);
export const functions = firebase.functions();