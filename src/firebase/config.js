import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig={
    apiKey: "AIzaSyAsoJiB6qVvo9JzhfWPVkbVpt0fPHvee-w",
    authDomain: "website1-d782d.firebaseapp.com",
    projectId: "website1-d782d",
    storageBucket: "website1-d782d.appspot.com",
    messagingSenderId: "710347257010",
    appId: "1:710347257010:web:27b0478b2de4fdd49f45ab",
    // measurementId: "G-VQ219TKT49"n
};
const firebase= Firebase.initializeApp(firebaseConfig);
const db= firebase.firestore();
export {firebase,db};