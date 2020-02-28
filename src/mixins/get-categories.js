import { db } from '../db'

export const getCategoriesMixin = {
  data() {
    return {
      categories: [],
      selectedCategory: 'food',
      getCategories: () => {
        db.collection('categories').get().then(data => {
          data.docs.map(doc => {
            console.log(doc.data().name)
            this.categories.push({id: doc.id, name: doc.data().name})
          })
        })
      },
    }
  },
  created() {
    this.getCategories()
  },
}