<template>
  <div class="home">
      <div class="introTextDiv">
        <p>Student i oslo?</p>
        <p>Ingen grunn til å kjede seg!</p>
      </div>
      <div class="pictureDiv">
        <div class="buttonDiv">
          <v-btn class="home-btn" to="/events" large>Finn arrangementer</v-btn> <br>
          <v-btn class="home-btn" to="/make-event" large>Opprett arrangement</v-btn>
        </div>
      </div>
      
  </div>
</template>

<script>
</script>
<style type="text/css">


.home {

  
  height:100%;
  
}

.introTextDiv {
  height: 30vh;
  display: flex; 
  align-items: center;
  justify-content: center;
  opacity:0.9;
  flex-direction:column;
}

.pictureDiv {
  height:60vh;
  background-image:url("../assets/party.jpeg");
  background-size:cover;
  height:100%;


}

.buttonDiv {
  background-color:white;
  opacity:0.7;
  height:30vh;
  display:flex;
  justify-content:center;
  flex-direction:column;
}

</style>


