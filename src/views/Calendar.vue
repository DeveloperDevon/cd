<template>
  <v-row class="fill-height">
    <v-col class="py-0">
      <v-sheet>
        <v-toolbar flat color="white">
          <v-btn fab text small @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn  outlined @click.stop="showDialog" class="new-btn">
            New
          </v-btn>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-btn outlined @click="setToday">
            Today
          </v-btn>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-btn fab text small @click="next">
            <v-icon small class="next-btn">mdi-chevron-right</v-icon>
          </v-btn>
          <div class="flex-grow-1"></div>
        </v-toolbar>
      </v-sheet>

      <v-dialog v-model="dialog" max-width="500">
        <v-card class="add-event-dialog">
          <v-container>
            <v-form @submit.prevent="insertEvent">
              <v-card-title class="headline lighten-2 pr-0" primary-title>
              <span style="margin-left: 27%">{{ dialogMode }} Event</span>
              <v-icon @click="deleteEvent" v-if="deleteVisible" color="red" style="margin-left: auto; font-size:30px">
                mdi-delete
              </v-icon>
              </v-card-title>
              <v-text-field v-model="name" type="text" label="Event"></v-text-field>
              <v-row class="dates">
                <v-col cols="6">
                  <v-menu
                    v-model="miniCal1"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="computedStartDateFormatted"
                        label="Start"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="startDate" no-title @input="miniCal1 = false"></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="6">
                  <v-menu
                    v-model="miniCal2"
                    :close-on-content-click="false"
                    transition="scale-transition"
                    offset-y
                    max-width="290px"
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="computedEndDateFormatted"
                        label="End"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="endDate" no-title @input="miniCal2 = false"></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
              <v-textarea v-model="details" type="text" label="Details" height="25px"></v-textarea>
              <v-btn type="submit" color="primary" @click.stop="dialog = false">
                {{ dialogMode }}
              </v-btn>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>

<v-sheet height="600">
  <v-calendar
  ref="calendar"
  v-model="focus"
  color="primary"
  :events="events"
  :event-margin-bottom="3"
  :now="today"
  :type="type"
  @click:event="showDialog"
  @click:date="showDialog"
  ></v-calendar>
  <v-menu
  v-model="selectedOpen"
  :close-on-content-click="false"
  :activator="selectedElement"
  full-width
  offset-x
  >
</v-menu>
</v-sheet>
</v-col>
</v-row>
</template>

<script>
import { db } from '@/db'
export default {
  data: () => ({
    today: new Date().toISOString().substr(0, 10),
    focus: new Date().toISOString().substr(0, 10),
    type: 'month',
    typeToLabel: {
      month: 'Month',
      week: 'Week',
      day: 'Day',
      '4day': '4 Days',
    },
    color: '#1976D2', // default event color
    name: null,
    details: null,
    currentlyEditing: null,
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    dialog: false,
    dialogTitle: '',
    eventId: null,
    startDate: null,
    endDate: null,
    deleteVisible: false,
    miniCal1: false,
    miniCal2: false,
  }),
  mounted () {
    this.getEvents()
  },
  watch: {
    dialog(val) {
      if(!val) {
        setTimeout(() => {
          this.name = ''
          this.startDate = ''
          this.endDate = ''
          this.details = ''
        }, 500)
      } 
    }
  },
  computed: {
    computedStartDateFormatted () {
      return this.formatDate(this.startDate)
    },
    computedEndDateFormatted () {
      return this.formatDate(this.endDate)
    },
    monthFormatter () {
      return this.$refs.calendar.getFormatter({
        timeZone: 'UTC', month: 'long',
      })
    }
  },

  methods: {
    async getEvents () {
      let snapshot = await db.collection('calEvent').get()
      const events = []
      snapshot.forEach(doc => {
        let appData = doc.data()
        appData.id = doc.id
        events.push(appData)
      })
      this.events = events
    },
    showDialog( { date, event }) {
      this.dialogMode = event ? "Edit" : date ? "Add" : "New"
      this.eventId = event ? event.id : null
      this.name = event ? event.name : ''
      this.startDate = event ? event.start : date ? date : ''
      this.endDate = event ? event.end : date ? date : ''
      this.details = event ? event.details : ''
      this.dialog = true
      this.focus = date
      this.deleteVisible = event ? true : false
    },
    setToday () {
      this.focus = this.today
    },
    prev () {
      this.$refs.calendar.prev()
    },
    next () {
      this.$refs.calendar.next()
    },
    formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
    },
    async insertEvent () {
      if (this.name && this.startDate && this.endDate) {
        const insertType = this.dialogMode
        const event = {
        name: this.name,
        details: this.details,
        start: this.startDate,
        end: this.endDate,
      }
        insertType === 'Edit' ? await db.collection('calEvent').doc(this.eventId).update(event) :
        await db.collection("calEvent").add(event)
        
        this.getEvents()
        this.dialog = false
      }
      else {
        alert('You must enter event name, start, and end time')
      }
    },
    async deleteEvent() {
      console.log(this.eventId)
      await db.collection("calEvent").doc(this.eventId).delete()
      this.getEvents()
      this.dialog = false
    },
    showEvent ({ nativeEvent, event }) {
      this.dialog = true
      console.log({nativeEvent, event})
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        setTimeout(() => this.selectedOpen = true, 10)
      }
      if (this.selectedOpen) {
        this.selectedOpen = false
        setTimeout(open, 10)
      } else {
        open()
      }
      nativeEvent.stopPropagation()
    },
    updateRange ({ start, end }) {
      this.start = start
      this.end = end
    }
  }
}
</script>

<style scoped>
  .add-event-dialog {
    padding: 20px
  }

  .new-btn {
    margin-left: 45px;
    width: 84.3px;
  }

  .next-btn {
    padding-left: 15px;
  }

  .dates {
    margin-bottom: 55px;
  }
</style>