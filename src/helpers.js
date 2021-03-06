export const transformGroceries = (doc) => {
  return {
    id: doc.id,
    item_name: doc.data().item_name,
    checked: doc.data().checked,
  }
}

export const transformPhotos = (doc) => {
  return {
    id: doc.id,
    item_name: doc.data().name,
    downloadURL: doc.data().downloadURL,
    timestamp: doc.data().timestamp,
    rotateClass: doc.data().rotateClass
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
    cookTime: doc.data().cookTime,
    image: doc.data().image,
    source: doc.data().source,
    sourceUrl: doc.data().url,
    yields: doc.data().yield,
    calories: doc.data().calories,
  }
}

export const filterCategories = (arr) => {
  if(arr) return [...new Set(arr.map(item => item.category))];
}