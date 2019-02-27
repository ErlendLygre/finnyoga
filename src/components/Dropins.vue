<template>
<div class="home">
  <div class="main-div">
    <div class="dropinDiv" v-for="item in dropins" :key="item.studioName">
      <div class="innerLeftDiv">
        <span>
        {{item.yogaType}}
        <br><br>
        {{item.studioSuburb}}
        </span>
      </div>
      <div class="innerMiddleDiv">
        <span>
        {{item.difficulty}}
        <br><br>
        {{item.time}}
        </span>
      </div>
      <div class="innerRightDiv">
        <span>
        {{item.price}},-
        </span>
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
  background-color: #F2F2F2;
  margin-top: 20px;
  box-shadow: 2px 2px gray;
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
  background: url("../assets/yogastudio2.jpg") no-repeat center; 
  background-size: cover;
}
</style>
