import * as firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DB_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID
}

// export const getGroceries = () => {
//   db.collection('groceries').get().then((queryData) => queryData.docs.map((doc) => {
//     const data = this.transform(doc)
//     this.groceries.push(data)
//   }))
// }

export const fb = firebase.initializeApp(config)
export const db = firebase.firestore()