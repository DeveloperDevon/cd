export const transform = (doc) => {
  return {
    id: doc.id,
    item_name: doc.data().item_name,
    category: doc.data().category,
    checked: doc.data().checked,
    qty: doc.data().qty
  }
}

export const filterCategories = (arr) => {
  if(arr) return [...new Set(arr.map(item => item.category))];
}