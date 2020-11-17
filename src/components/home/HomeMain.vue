<template>
  <main id="home-content">
      <HomeMission />
      <HomeStats />
      <HomeOffers />
      <HomeClients />
  </main>
</template>
      

<script>
import HomeStats from './home_sections/HomeStats'
import HomeMission from './home_sections/HomeMission'
import HomeOffers from './home_sections/HomeOffers'
import HomeClients from './home_sections/HomeClients'
export default {
    name: "HomeMain",
    components: {
        HomeStats, 
        HomeMission,
        HomeOffers,
        HomeClients,
    }
}
</script>

