<template>
  <div class="client-list">
      <p class="client-list__header">{{ title }}</p>
      <div class="client-logos">
          <div class="client" v-for="image in images" :key="image">
              <img class="client-image" :src="require(`@/assets/img/clients/${image}.png`)">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "ClientList",
    props: {
        title: String,
        images: Array,
    }
}
</script>

<style scoped>
    .client-list {
        margin-bottom: 64px;
    }

    .client-list__header {
        margin-bottom: 1rem;
    }

    .client-logos {
        display: grid;
        grid-gap: 48px;
        grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
        align-items: center;
    }

    .client-image {
        width: 100%;
    }

    @media (max-width: 320px) {
        .client-list__header {
            font-size: 16px;
            line-height: 32px;
        }

        .client-logos {
            grid-template-columns: repeat(2, 1fr);
        }

    }

</style>