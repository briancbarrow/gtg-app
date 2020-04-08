import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({ 
    apiKey: "AIzaSyCsI11lGPxL4Ii5hizh4Ek7hXKCHsv0muE",
    authDomain: "gtg-app-2ca0c.firebaseapp.com",
    databaseURL: "https://gtg-app-2ca0c.firebaseio.com",
    projectId: "gtg-app-2ca0c",
    storageBucket: "gtg-app-2ca0c.appspot.com",
    messagingSenderId: "963454521224",
    appId: "1:963454521224:web:391adee0807bb55e3c743d",
    measurementId: "G-PZQKV8XNG2"
  })
  .firestore()

export const authProvider = new firebase.auth.GoogleAuthProvider();  

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

