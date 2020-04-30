import { storage, db } from '@/db'
import * as firebase from 'firebase'
import { transformPhotos } from '../helpers'

const timestamp = firebase.firestore.FieldValue.serverTimestamp()


const state = {
  gallery: {
    photos: []
  },
  uploadError: null
}

const getters = {
  photos: state => state.gallery.photos,
}

const actions = {
  async fetchPhotos({commit}) {
    const photos = await db.collection('gallery')
    .orderBy('timestamp', 'desc')
    .get()
    .then((queryData) => queryData.docs.map((doc) => transformPhotos(doc)))
    commit('setPhotos', photos)
    
  },
  async uploadPhoto({commit}, photoData) {
    console.log(photoData)
    const {filename, photo, rotateClass} = photoData
    await storage.ref(`photos/${filename}`).put(photo)
    .then((a) => {
        a.ref.getDownloadURL().then(async (url) => {
          const photo = {name: filename, downloadURL: url, rotateClass}
          await db.collection('gallery').add({timestamp, ...photo})
          .then((a) => commit('setUploadedPhoto', { id: a.id,  ...photo }))
        })
    })
    .catch(e => commit('setUploadError', e))
  }
}

const mutations = {
  setPhotos: (state, photos) => {state.gallery.photos = photos},
  setUploadedPhoto: (state, photo) => {state.gallery.photos.push(photo)},
  setPhotoUploadError: (state, error) => { state.uploadError = error }
}

export default { state, getters, actions, mutations }