import { db } from '@/db'
import { transform } from '@/helpers'

export const watcherMixin = {
  methods: {
    watcher() {
      db.collection('groceries').onSnapshot((querySnapshot) => {
        this.groceries = []
        querySnapshot.forEach((doc) => this.groceries.push(transform(doc)))
      })
    }
  }
}