<template>
  <div class="client-list">
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

    .client-logos {
        display: grid;
        grid-gap: 48px;
        grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
        align-items: center;
    }

    .client-image {
        width: 100%;
    }

</style>