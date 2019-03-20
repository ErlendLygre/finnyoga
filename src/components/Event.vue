<template id="event">
  <div @click="show =! show" class="card-wrapper">
    <p>{{event.title}}</p>
    <p v-if="show">{{event.description}}</p>
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
.card-wrapper {
  width: 80%;
  background-color: lightblue;
  margin: 0 auto;
}
</style>

