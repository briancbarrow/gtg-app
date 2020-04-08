import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({ 
    authDomain: "gtg-app-2ca0c.firebaseapp.com",
    databaseURL: "https://gtg-app-2ca0c.firebaseio.com",
    projectId: "gtg-app-2ca0c",
  })
  .firestore()

export const authProvider = new firebase.auth.GoogleAuthProvider();  

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

