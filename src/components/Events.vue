<template>
<div class="home">
  <div class="main-div">
    <event v-for="event in events" v-bind="event" :key="event.eventName">
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

</style>
