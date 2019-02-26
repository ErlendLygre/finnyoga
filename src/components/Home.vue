<template>
  <div class="home">
      <img src="../assets/logo_new.png" class="logo">
      <v-btn class="home-btn" to="/dropins" large color="success" round>Finn din neste yogatime</v-btn> <br>
      <v-btn class="home-btn" to="/make-dropin" large color="success" round>Instruktør? Opprett time</v-btn>
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
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.logo {
  margin: 50px 50px;
}

.home-btn {
  font-family:Arial, Helvetica, sans-serif;
  opacity: 0.8;
}
</style>


