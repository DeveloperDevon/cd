import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

// const config = {
//   apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
//   authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.VUE_APP_DB_URL,
//   projectId: process.env.VUE_APP_PROJECT_ID,
//   storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
//   appId: process.env.VUE_APP_APP_ID,
//   measurementId: process.env.VUE_APP_MEASUREMENT_ID
// }

const config = {
  apiKey: 'AIzaSyD0YWJ5m7bxsgf0HcP324wHlWkpcQ8n7ak',
  authDomain: 'devler-1720e.firebaseapp.com',
  databaseURL: 'https://devler-1720e.firebaseio.com',
  projectId: 'devler-1720e',
  storageBucket: 'gs://devler-1720e.appspot.com',
  messagingSenderId: '789649485811789649485811',
  appId: '1:789649485811:web:8bbfd25b395ee9fcfa2c86',
  measurementId: 'G-RP6VWTQEL4'
}

// export const getGroceries = () => {
//   db.collection('groceries').get().then((queryData) => queryData.docs.map((doc) => {
//     const data = this.transform(doc)
//     this.groceries.push(data)
//   }))
// }

export const fb = firebase.initializeApp(config)
export const db = firebase.firestore()
export const storage = firebase.storage()
export const auth = firebase.auth()