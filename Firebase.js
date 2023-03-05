const { initializeApp } = require('firebase/app');
const { getAuth } = require('firebase/auth');
const { getDatabase } = require('firebase/database');
const { getStorage } = require('firebase/storage');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd1-r7KIaaZI1GHcS6Ty3LQ6r7OE1JGxA",
  authDomain: "lapladvote.firebaseapp.com",
  projectId: "lapladvote",
  storageBucket: "lapladvote.appspot.com",
  messagingSenderId: "809638628822",
  appId: "1:809638628822:web:a3b4a0dc55862eb6966877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
const db = getDatabase(app);
// const storage = getStorage(app);

exports.db = db;