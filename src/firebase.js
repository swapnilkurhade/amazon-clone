// compat packages are API compatible with namespaced code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCypAofcH5pWKUrqr4Px87mcEqXkatG2SI",
    authDomain: "amaz-clone-6c75c.firebaseapp.com",
    projectId: "amaz-clone-6c75c",
    storageBucket: "amaz-clone-6c75c.appspot.com",
    messagingSenderId: "620291506991",
    appId: "1:620291506991:web:48a51c9de7e3ba5a3d17da",
    measurementId: "G-5GEVQC7C1Z"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
