import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDtu2LLN7FbAWYfPgcfoJLHQdHLT3xSNZE",
    authDomain: "cooking-ninja-site-72caa.firebaseapp.com",
    projectId: "cooking-ninja-site-72caa",
    storageBucket: "cooking-ninja-site-72caa.appspot.com",
    messagingSenderId: "617330775876",
    appId: "1:617330775876:web:2cd7587fd2c09e17db2911"
};
// init firebase
firebase.initializeApp(firebaseConfig)
// init services
const projectFirestore = firebase.firestore()


export { projectFirestore }