<template>
  <v-container style="margin: 0; padding: 0">
      <PhotoAlbum />
  </v-container>
</template>

<script>
  import PhotoAlbum from '@/components/Gallery/PhotoAlbum'

  export default {
    name: 'Gallery',
    components: { PhotoAlbum },
  }
  
</script>

<style scoped>
  * {
    background-color: #121212;
  }
</style>