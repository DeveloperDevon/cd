<template>
  <div>
    <div class="album-container">
      <Photo v-for="photo in photos" :key="photo.id" :photo=photo />
    </div>
    <UploadPhotoButton />
  </div>
</template>

<script>
  import UploadPhotoButton from './UploadPhotoButton'
  import Photo from './Photo'
  import { mapGetters } from 'vuex'

  export default {
    name: 'PhotoAlbum',
    components: { Photo, UploadPhotoButton },
    computed: mapGetters(['photos']),
    methods: {
      showPhotoDetails(photo) {
        console.log(photo)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .album-container {
    position: absolute;
    height: 100vh;
    width: 100vw;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .fill {
    overflow: hidden;
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 415px;
    margin-bottom: 10px;
    max-width: 435px;
  }

</style>