<template>
  <div class="home">
      <img src="../assets/logo_new.png" class="logo">
      <v-btn class="yoga-btn" to="/dropins" large color="success" round>Finn din neste yogatime</v-btn> <br>
      <v-btn class="yoga-btn" to="/make-dropin" large color="success" round>Instruktør? Opprett time</v-btn>
  </div>
</template>

<script>
</script>
<style type="text/css">

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: url("../assets/yogastudio2.jpg") no-repeat center; 
  background-size: cover;
}

.logo {
  margin: 50px 50px;
}

</style>


