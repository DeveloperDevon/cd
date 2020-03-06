<template>
  <v-container>
    <v-dialog v-model="dialog" width="500">

      <template v-slot:activator="{ on }">
        <div v-on="on">Login <v-icon>mdi-login-variant</v-icon></div>
      </template>

        <v-form @submit.prevent="login()" v-model="valid">
            <v-card>
            <v-container>
                <v-card-title class="headline lighten-2" primary-title>
                Login
                </v-card-title>
                <v-card-text>
                    <v-row>
                        <v-col cols="12" md="4">
                        <v-text-field v-model="email" label="Email" :rules="emailRules" required></v-text-field>
                        </v-col>

                        <v-col cols="12" md="4">
                        <v-text-field type="password" v-model="password" label="Password" :rules="passwordRules" required></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
                <v-card-actions>
                    <v-col cols="12" md="4">
                        <v-btn type="submit">Login</v-btn>
                    </v-col>
                </v-card-actions>
            <div class="error" v-if="error">{{error.message}}</div>
            </v-container>
            </v-card>
        </v-form>
      
    </v-dialog>
  </v-container>
</template>

<script>
    import { auth } from '@/db'
    import store from '@/store'

    export default {
    data() {
      return {
        dialog: '',
        email: '',
        password: '',
        error: '',
        valid: false,
        passwordRules: [
        v => !!v || 'Name is required',
        ],
        emailRules: [
        v => !!v || 'E-mail is required',
        ],
      }
    },
    methods: {
        // store: store,
        login() {
            auth.signInWithEmailAndPassword(this.email, this.password)
            .then((a) => {
                console.log('from comp', store, this.store)
                store.commit('auth/setUser', a.user.email)
                this.$emit('loggedIn', a)
                this.$router.replace({name: 'dashboard'})
                this.dialog=false
                this.email = ''
                this.password = ''
            })
            .catch(e => this.error = e)
        }
    }
    }
</script>

<style lang="scss" scoped>

</style>