<template>
<div class="events-container">
  <div class="main-div">
    <event v-for="event in events" v-bind:event="event" :key="event.eventName">
    </event>
  </div>
 </div> 
</template>
<script>
import Event from "./Event.vue"

export default {
  props: {
    user: Object,
    db: Object
  },
  components: {
    Event
  },
  data() {
    return {
      events: [],
      showDescription: false
    }
  },
  mounted() {
    this.db.collection("events").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.events.push(doc.data())
    });
    });
  }
}
</script>


<style>

.events-container{
  width:100%;
  height:100%;
  background-image:url("../assets/party.jpeg");
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  
}

</style>
