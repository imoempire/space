import { initializeApp } from "firebase/app";
import * as firebase from "firebase";
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCNmJiS_A1Zyou2JnOHZgLIWcnB8RQoOEA",
  authDomain: "space-a6018.firebaseapp.com",
  projectId: "space-a6018",
  storageBucket: "space-a6018.appspot.com",
  messagingSenderId: "842268596492",
  appId: "1:842268596492:web:3ad8d2c8d4fa2a8ccb1129"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
   app = initializeApp(firebaseConfig);
} else{
   app = firebase.app()
}

const auth = firebase.auth()

export { auth };
