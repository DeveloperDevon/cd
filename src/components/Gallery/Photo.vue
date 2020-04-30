<template>
  <div>

    <v-dialog v-model="dialog" content-class="photo-details-dialog">
      <template v-slot:activator="{ on }">
        <div
          class="fill"
          v-on="on"
          @click="showPhotoDetails(photo)"
          v-bind:style="{ 
            transform: photo.rotateClass, 
            backgroundImage: `url(${photo.downloadURL})` 
          }"
        >
        </div>
      </template>

      <template>
        <v-form @submit.prevent="submit()">
          <v-card>
            <v-card-title class="headline lighten-2" primary-title>
              {{ photo.item_name }}
              <v-spacer></v-spacer>
              <v-menu
                transition="slide-y-transition"
                bottom
              >
                <template v-slot:activator="{ on }">
                  <v-icon v-on="on">mdi-menu</v-icon>
                </template>
                <v-list>
                  <v-list-item @click="rotatePhoto('right')" >
                    <v-list-item-title>Rotate Right</v-list-item-title>
                  </v-list-item>
                  <v-list-item @click="rotatePhoto('left')" >
                    <v-list-item-title>Rotate Left</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              
            </v-card-title>
              <v-row v-if="photo">
                <v-col cols="12" class="d-flex" style="min-height: 310px; min-width:310px">
                  <div class="img-container" style="margin: auto;" v-bind:style="{ transform: photo.rotateClass }">
                    <img :src="photo.downloadURL" >
                  </div>
                </v-col>
              </v-row>
            <v-row>
              <v-col></v-col>
              <v-col>
                <v-card-actions>
                  <v-btn raised x-large color="secondary" class="mr-5" @click="dialog = false">Close</v-btn>
                  <v-btn raised x-large color="primary" class="ml-5" type="submit">Update</v-btn>
                </v-card-actions>
              </v-col>
              <v-col></v-col>
            </v-row>
          </v-card>
        </v-form>
      </template>

    </v-dialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Photo',
    props: ['photo'],
    data() {
      return {
        dialog: false
      }
    },
    computed: mapGetters(['photos']),
    methods: {
      showPhotoDetails(photo) {
        console.log(photo)
      },
      rotatePhoto(direction) {
        if (direction !== 'left' && direction !== 'right') console.error('wrong direction input')
        const degrees = parseInt(this.photo.rotateClass.match(/[0-9]+/)[0], 10)
        if (direction === 'right') this.photo.rotateClass = `rotate(${degrees + 90}deg)`
        if (direction === 'left') this.photo.rotateClass = `rotate(${degrees - 90}deg)`
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

  .container {
    padding: 0px !important
  }
  .img-container img {
   width: 100%;
   max-height: 310px;
   max-width: 310px;
  }
  .photo-details-dialog {
    margin: 0px;
    height: 95vh;
    overflow-y: hidden
  }

</style>