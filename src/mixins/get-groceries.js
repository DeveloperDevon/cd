import { db } from '../db'
import { transform } from '@/helpers'

export const getGroceriesMixin = {
  data() {
    return {
      groceries: [],
      getGroceries: () => {
        db.collection('groceries').get().then((queryData) => queryData.docs.map((doc) => {
          const data = transform(doc)
          this.groceries.push(data)
        }))
      }
    }
  },
  created() {
    this.getGroceries()
  },
  methods: {
    // transform(doc) {
    //   return {
    //     id: doc.id,
    //     name: doc.data().item_name,
    //     category: doc.data().category,
    //     checked: doc.data().checked
    //   }
    // },
    // watcher() {
    //   db.collection('groceries').onSnapshot((querySnapshot) => {
    //     this.groceries = []
    //     console.log(querySnapshot)
    //     querySnapshot.forEach((doc) => this.groceries.push(this.transform(doc)))
    //   })
    // }
  }
}