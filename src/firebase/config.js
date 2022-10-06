import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmZOhRvhDa3FHpOVL4-r_IPcny7SCUPng",
  authDomain: "bar-shows-template.firebaseapp.com",
  projectId: "bar-shows-template",
  storageBucket: "bar-shows-template.appspot.com",
  messagingSenderId: "877949051108",
  appId: "1:877949051108:web:bab95ce217070dc6ff4cf1",
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
