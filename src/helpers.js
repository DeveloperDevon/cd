export const transform = (doc) => {
  return {
    id: doc.id,
    name: doc.data().item_name,
    category: doc.data().category,
    checked: doc.data().checked,
    qty: doc.data().qty
  }
}