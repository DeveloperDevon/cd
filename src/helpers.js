export const transformGroceries = (doc) => {
  return {
    id: doc.id,
    item_name: doc.data().item_name,
    category: doc.data().category,
    checked: doc.data().checked,
    qty: doc.data().qty
  }
}

export const transformEvents = (doc) => {
  return {
    id: doc.id,
    name: doc.data().name,
    start: doc.data().start,
    end: doc.data().end,
    details: doc.data().details
  }
}

export const transformRecipes = (doc) => {
  return {
    id: doc.id,
    name: doc.data().name,
    ingredients: doc.data().ingredients,
    directions: doc.data().directions,
    cookTime: doc.data().cookTime
  }
}

export const filterCategories = (arr) => {
  if(arr) return [...new Set(arr.map(item => item.category))];
}