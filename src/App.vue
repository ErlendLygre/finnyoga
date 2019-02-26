<template>
  <v-app>
    <router-view :dropin='dropin'> </router-view>
  </v-app>
</template>

<script>

export default {
  
  data () {
    
    return {
      dropin: {
        
        description: null,
        studioName: null,
        studioAddress: null,
        studioSuburb: null,
        //total room for users
        studioCapacity: null,
        //booked spots
        studioType: null,
        date: null,
        time: null,
        price: null,
        difficulty: null,
        yogaType: null,
        bookedSpots: null,
      },
      
      
    }
  }

}

</script>
