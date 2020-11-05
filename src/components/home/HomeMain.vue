<template>
  <main id="home-content">
      <HomeMission />
      <HomeStats />
      <HomeOffers />
  </main>
</template>
      

<script>
import HomeStats from './home_sections/HomeStats'
import HomeMission from './home_sections/HomeMission'
import HomeOffers from './home_sections/HomeOffers'
export default {
    name: "HomeMain",
    components: {
        HomeStats, 
        HomeMission,
        HomeOffers
    }
}

</script>

<style scoped>


</style>