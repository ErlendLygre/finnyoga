<template>
  <v-app>
    <hat></hat>
    <router-view :db='db' :event='event'> </router-view>
  </v-app>
</template>

<script>
import Hat from './components/Hat.vue'
import firebase from 'firebase'
//import 'firebase/firestore'

let config = {
  apiKey: "AIzaSyAOSpYmY1FFJHvGqEhWfOw0kagF7nKqo84",
  authDomain: "finnyoga-eee5b.firebaseapp.com",
  databaseURL: "https://finnyoga-eee5b.firebaseio.com",
  projectId: "finnyoga-eee5b",
  storageBucket: "finnyoga-eee5b.appspot.com",
  messagingSenderId: "908978801004"
};
firebase.initializeApp(config)
export const db = firebase.firestore()
db.settings({timestampsInSnapshots: true})

export default {
  data () {
    return {
      db: db,
      event: {
        description: null,
        title: null,
        location: null,
        host: null,
        date: null,
        time: null,
      }
    }
  },
  components:{
    Hat
  }
}

</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
}

h3 {
  font-weight: 300;
}

</style>
