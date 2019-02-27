<template>
<div class="home">
  <div class="main-div">
    <div class="dropinDiv" v-for="item in dropins" :key="item.studioName">
      <div class="innerLeftDiv">
        {{item.name}}
      </div>
      <div class="innerMiddleDiv">
        {{item.description}}
      </div>
      <div class="innerRightDiv">
        {{item.date}}
      </div>
    </div>
  </div>
 </div> 
</template>
<script>
export default {
  props: {
    user: Object,
    db: Object
  },
  data() {
    return {
      dropins: [],
    }
  },
  mounted() {
    this.db.collection("dropins").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        this.dropins.push(doc.data())
    });
});
  }
}
</script>


<style>
.dropinDiv {
  display: flex;
  background-color: lightgrey;
  margin-top: 20px;
  box-shadow: 2px 2px gray;
  border-left:7px solid black;  
}

.innerLeftDiv {
  width:33%;
  background-color:cadetblue;
  
}

.innerMiddleDiv {
  width:33%;
  background-color:coral;
}

.innerRightDiv {
  width:34%;
  background-color:crimson;
}
.


.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: url("../assets/yogastudio2.jpg") no-repeat center; 
  background-size: cover;
}
</style>
