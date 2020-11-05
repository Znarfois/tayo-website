<template>
  <main id="home-content">
      <article class="mission">
          <h1 class="mission-header">TAYO: For and by our generation</h1>
          <section class="mission-content">
              <p class="mission-statement">Our mission is to <span class="mission-statement__strong">cultivate collaboration & innovation</span> amongst people.</p>
              <p class="mission-details">We collaborate to innovate brands to disrupt and change the world, through design and sustainable strategies. We integrate culture in innovating purpose, evolve with the times, and collaborate to innovate — all for the benefit of the people and the planet. Generations are evolving, and you should too. Innovate your brand for the futures to come.</p>
          </section>
      </article>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>

    .mission {
        padding: 0 144px;
        padding-bottom: 150px;
    }

    .mission-header {
        color: #5AA3A9;
        text-align: center;
        padding: 64px 0;
        text-transform: uppercase;
    }

    .mission-content {
        display: flex;
        justify-content: space-around;
    }

    .mission-statement {
        width: 384px;
    }

    .mission-statement__strong {
        color: #375998;
        font-weight: 700;
    }

    .mission-details {
        width: 568px;
    }


</style>