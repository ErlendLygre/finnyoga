<template id="event">
  <div @click="show =! show" class="card-wrapper">
    <h3>{{event.name}}</h3>
    <p v-if="show">{{event.description}}</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['event'],
  data() {
    return {
      show: false
    }
  }
}
</script>


<style>
.card-wrapper {
  width: 80%;
  height: 100px;
  background-color: lightblue;
  margin: 0 auto;
}
</style>

