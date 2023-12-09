import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCkFZowuOwg5TiTMcA4fIWeqg8ustVzGPo",
    authDomain: "empoderadas-2ffec.firebaseapp.com",
    projectId: "empoderadas-2ffec",
    storageBucket: "empoderadas-2ffec.appspot.com",
    messagingSenderId: "162206487831",
    appId: "1:162206487831:web:8e219ee474cc6a5d2f1352"
  };
  
  // Initialize Firebase
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase;
  