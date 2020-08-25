import * as firebase from 'firebase/app';
import 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyAU5o8Y_tCYtixaUX_YqhoK4_-hlmshHmY",
  authDomain: "myprotfolio-project.firebaseapp.com",
  databaseURL: "https://myprotfolio-project.firebaseio.com",
  projectId: "myprotfolio-project",
  storageBucket: "myprotfolio-project.appspot.com",
  messagingSenderId: "354664926376",
  appId: "1:354664926376:web:846659ae8defa6c8cc069d",
  measurementId: "G-E0PHC2EZYK"
};
firebase.initializeApp(firebaseConfig);
export const functions = firebase.functions();