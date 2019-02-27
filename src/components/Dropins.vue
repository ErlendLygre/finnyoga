<template>
  <div class="main-div">
    {{dropins}}
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

