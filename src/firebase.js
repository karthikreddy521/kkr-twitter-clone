import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBmL54uF9gHGN1mnpNKFFqqRzbq70HPsGo",
    authDomain: "kkr-twitter-clone.firebaseapp.com",
    databaseURL: "https://kkr-twitter-clone.firebaseio.com",
    projectId: "kkr-twitter-clone",
    storageBucket: "kkr-twitter-clone.appspot.com",
    messagingSenderId: "282385209652",
    appId: "1:282385209652:web:c0aed099f6b5fd7335ad61",
    measurementId: "G-7LJVH8Q82K"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;