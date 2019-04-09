<template id="event">
  <div @click="show =! show" class="card-wrapper">
    <h6 class="event-title">{{event.title}}</h6>
    <p class="event-description" v-if="show">{{event.description}}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    event: Object
  },
  data() {
    return {
      show: false
    }
  }
}
</script>


<style>



.title-date{
  display:flex;
  flex-direction:row;
}

.card-wrapper {
  width: 80%;
  background-color: rgb(250, 198, 198);
  margin: 0 auto;
  margin-top:5%;
  opacity:0.9;
  border-bottom:black;
  border-radius:1em;
 ;
  

  
}

.event-title{

  opacity:0.7;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size:70%;
  padding-left:3%;
  
  

}


P.event-description {
  font-size: 70%;
  padding-left:5%;
  font-weight: 400;
  
  
  
  
  
  
  
}
</style>

