<template>
  <v-container>
    <v-dialog v-model="dialog" content-class="upload-photo-dialog">

      <template v-slot:activator="{ on }">
        <v-btn style="margin-left:47%" class="mb-9" fab outlined absolute bottom middle color="secondary" dark v-on="on">
          <v-icon>mdi-upload</v-icon>
        </v-btn>
      </template>

      <template>
        <v-form @submit.prevent="submit()">
          <v-card>
            <v-card-title class="headline lighten-2" primary-title>
              Upload Photo
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
              <v-row>
                <v-col class="py-0 px-7">
                  <v-file-input @change="photoPicked"></v-file-input>
                </v-col>
              </v-row>
              <v-row v-if="photo">
                <v-col cols="12" class="d-flex" style="min-height: 310px; min-width:310px">
                  <div class="img-container" style="margin: auto;" v-bind:style="{ transform: rotateDegrees }">
                    <img :src="photoUrl"  >
                  </div>
                </v-col>
              </v-row>
            <v-row>
              <v-col></v-col>
              <v-col>
                <v-card-actions>
                  <v-btn raised x-large color="primary" type="submit">Upload Photo</v-btn>
                </v-card-actions>
              </v-col>
              <v-col></v-col>
            </v-row>
          </v-card>
        </v-form>
      </template>
      
    </v-dialog>
  </v-container>
</template>

<script>
  // import { storage } from '@/db'
import { mapActions } from 'vuex'

  export default {
    name: 'UploadPhotoButton',
    data() {
      return {
        dialog: false,
        photo: '',
        photoUrl: '',
        fileName: '',
        rotateDegrees: 'rotate(270deg)'
      }
    },
    methods: {
      ...mapActions(["uploadPhoto"]),
      photoPicked(event) {
        console.log(event)
        if (event === undefined) {
          this.photo = null
          this.photoUrl = ''
          this.fileName = ''
          return
        }
        const file = event
        let filename = event.name
        if (filename.lastIndexOf('.') <= 0) return alert('Invalid File Type')
        this.filename = event.name
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.photoUrl = fileReader.result
        })
        fileReader.readAsDataURL(file)
        this.photo = file
      },
      rotatePhoto(direction) {
        if (direction !== 'left' && direction !== 'right') console.error('wrong direction input')
        const degrees = parseInt(this.rotateDegrees.match(/[0-9]+/)[0], 10)
        if (direction === 'right') this.rotateDegrees = `rotate(${degrees + 90}deg)`
        if (direction === 'left') this.rotateDegrees = `rotate(${degrees - 90}deg)`
      },
      async submit() {
        const photoData = {
          photo: this.photo,
          photoUrl: this.photoUrl,
          filename: this.filename,
          rotateClass: this.rotateDegrees
        }
        this.uploadPhoto(photoData)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .item-input {
    flex: 1;
  }
  .container {
    padding: 0px !important
  }
  .img-container img {
   width: 100%;
   max-height: 310px;
   max-width: 310px;
  }
  .upload-photo-dialog {
    margin: 0px;
  }
</style>