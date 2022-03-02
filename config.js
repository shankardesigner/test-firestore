// Import the functions you need from the SDKs you need
const  {initializeApp}  =require("firebase/app");
const { getFirestore, collection, getDocs } = require('firebase/firestore/lite');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDriokh_zMZvSwJfwl_wWUTrRrSMT8dxQ4",
  authDomain: "cobalt-nomad-342806.firebaseapp.com",
  projectId: "cobalt-nomad-342806",
  storageBucket: "cobalt-nomad-342806.appspot.com",
  messagingSenderId: "761923162418",
  appId: "1:761923162418:web:289e05cb2438d2ea61072b",
  measurementId: "G-13RHLPB94N"
};

// Initialize Firebase
const fire = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

module.exports = fire; 