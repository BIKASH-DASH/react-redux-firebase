import firebase from 'firebase/app'
import  'firebase/firestore'
import  'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCsJJtv4ywTmE1mre2xKlq8lwxHgDYA1hw",
    authDomain: "net-ninja-63961.firebaseapp.com",
    projectId: "net-ninja-63961",
    storageBucket: "net-ninja-63961.appspot.com",
    messagingSenderId: "634777698615",
    appId: "1:634777698615:web:53b643e52613fa43935ab2",
    measurementId: "G-175V1YEET5"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
