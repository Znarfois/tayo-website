<template>
  <section id="offers">
      <h1 class="offering-header section-header">What We Offer</h1>
      <div class="offers-content"> 
          <HomeOffer image="service_a.png" title="Advocacy & Awareness" :services="serviceA"/>
          <HomeOffer image="service_b.png" title="Branding & Design Solutions" :services="serviceB"/>
          <HomeOffer image="service_c.png" title="Communications & Executions" :services="serviceC"/>
      </div>
  </section>
</template>

<script>
import HomeOffer from './HomeOffer'
export default {
    name: "HomeOffers",
    components: {
        HomeOffer,
    }, 
    data() {
        return {
            serviceA: [
                "CSR", 
                "Campaign Creation", 
                "Basic Sustainable Strategies & Policies", 
                "Social & Environmental Initiatives"],
            serviceB: [
                "Brand Identity, Strategy, Management",
                "UX Research, Design, & Web Development",
                "Photography & Videography",
                "Content Creation & Strategy",
                "Art Direction",
                "Graphic Design"],
            serviceC: [
                "Events (Online & Physical)",
                "Workshops (Online & Physical)",
                "Productions and Stage Management",
                "Marketing & Communications Strategies",
            ]
        }
    }
}
</script>

<style scoped>
    .offers-content {
        max-width: 80%;
        display: flex;
        justify-content: space-between;
        margin: auto;
    }

</style>