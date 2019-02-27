<template>
  <v-app>
    <router-view :db='db' :dropin='dropin'> </router-view>
  </v-app>
</template>

<script>
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
      dropin: {
        description: null,
        studioName: null,
        studioAddress: null,
        studioSuburb: null,
        //total room for users
        studioCapacity: null,
        //booked spots
        date: null,
        time: null,
        price: null,
        difficulty: null,
        yogaType: null,
        bookedSpots: null,
      },
      
      
    }
  }

}

</script>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
}

h3 {
  font-weight: 300;
}

.main-div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    margin: 0 auto;
}

@media only screen and (max-width: 600px) {
  .main-div {
      width: 90%;
      margin: 0 auto;
      transition: 0.5s;
      display: flex;
  }
}
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: url("/assets/yogastudio2.jpg") no-repeat center; 
  background-size: cover;
}
</style>
