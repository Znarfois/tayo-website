<template>
  <section id="offers">
      <h1 class="offering-header section-header">What We Offer</h1>
      <div class="offers-content">
          <HomeOffer image="service_a.png" title="Advocacy & Awareness"/>
          <HomeOffer image="service_a.png" title="Branding & Design Solutions"/>
          <HomeOffer image="service_a.png" title="Communications & Executions"/>
      </div>
  </section>
</template>

<script>
import HomeOffer from './HomeOffer'
export default {
    name: "HomeOffers",
    components: {
        HomeOffer,
    }
}
</script>

<style>
    .offers-content {
        max-width: 80%;
        display: flex;
        justify-content: space-between;
        margin: auto;
    }

</style>