<template>
  <div class="home">
      <div class="logoDiv">
        <img src="../assets/logo_new.png">
      </div>
      <div class="btnDiv">
        <v-btn to="/dropins" large color="success" round>Finn din neste yogatime</v-btn>
      </div>
  </div>
</template>

<script>
</script>



<style type="text/css">

.home {
  
  height: 100%;
  width: 100%;
  text-align: center;

  background: url("../assets/yogastudio2.jpg") no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  
  
}

.logoDiv {
  margin-right:-6.5%;
}

.btnDiv {
  padding-top:15%;
  justify-content: center;
  bottom: 100;
  margin-top:-20%;
  margin-right:0%;
  font-family:Arial, Helvetica, sans-serif;
  opacity: 0.8;
}



</style>


