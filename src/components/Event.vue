<template id="event">
  <div class="card-wrapper">
    <button @click="show =! show">I'm a card</button>
    <p v-if="show">Det viser!</p>
  </div>
</template>

<script>
export default {
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
}
</style>

