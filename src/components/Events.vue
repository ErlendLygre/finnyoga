<template>
<div class="home">
  <div class="main-div">
    <event></event>
    <event v-for="item in events" :key="item.eventName">
      {{item.eventName}}
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
.eventDiv {
  cursor: pointer;
  display: flex;
  background-color: #F2F2F2;
  margin-top: 20px;
  box-shadow: 2px 2px gray;
  /*border-left:2px solid black;*/
  border-radius: 5px;  
  /*opacity: 0.9;*/
}

.popup-div {
  display: flex;
  background-color: #F2F2F2;
  margin-top: 5px;
  box-shadow: 2px 2px gray;
  padding: 10px;
  /*border-left:2px solid black;*/
  border-radius: 5px;  
  /*opacity: 0.9;*/
}

.innerLeftDiv {
  width:33%;
  margin: 10px;
}

.innerMiddleDiv {
  margin: 10px;
  width:33%;
}

.innerRightDiv {
  width:34%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 2px dotted black;
  font-size:1.8rem;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: url("../assets/yogaevent2.jpg") no-repeat center; 
  background-size: cover;
}
</style>
