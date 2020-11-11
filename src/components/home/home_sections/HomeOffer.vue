<template>
  <div class="offer">
    <img class="offer-image" :src="require('@/assets/img/' + image)" alt="">
    <h2 class="offer-header">{{ title }}</h2>
    <p class="body-2" v-for="service in services" :key="service.id">
        {{ service }}
    </p>
  </div>
</template>

<script>
export default {
    name: "HomeOffer",
    props: {
        image: String,
        title: String,
        services: Array,
    }
}
</script>

<style scoped>
    .offer {
        text-align: center;
    }

    .offer-header {
        width: 200px;
        margin: auto;
    }

    .offer-image {
        width: 176px;
        margin-bottom: 1rem;
    }
</style>