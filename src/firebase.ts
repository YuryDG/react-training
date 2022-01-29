// Import the functions you need from the SDKs you need
import {
    FirebaseOptions,
    initializeApp,
    FirebaseApp,
    getApp,
    getApps
} from "firebase/app";
import { getAuth } from "firebase/auth";
import {
    getFirestore,
    collection,
    getDocs,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

let app: FirebaseApp;

// Initialize Firebase App
if (getApps().length) { // if app is already initialized
    app = getApp(); // get the same app
} else {
    app = initializeApp(firebaseConfig);
}

export const auth = getAuth(app);

// connection to the database
export const db = getFirestore();

// create references to your collections
export const booksCollectionRef = collection(db, 'books');

// // get collection data
// getDocs(booksCollectionRef)
//     .then((snapshot) => {
//         // each doc has a lot of info, but we care about the data, 
//         // they also have some metadata
//         const books = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
//         console.log({ books });
//     }).catch(err => {
//         console.log(err?.message);
//     });

export default app;