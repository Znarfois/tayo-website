<template>
  <div class="offer">
    <img class="offer-image" :src="require('@/assets/img/' + image)" alt="">
    <h3 class="offer-header">{{ title }}</h3>
    <p class="body-2 offer-text" v-for="service in services" :key="service.id">
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

/* Tablet */
    @media screen and (max-width: 1300px) {
        .offer {
            margin-bottom: 40px;
        }
    }

/* Mobile */
    @media screen and (max-width: 767px) {
        .offer-text {
            font-size: 12px;
            line-height: 24px;
        }

        .offer-image {
            margin: 8px;
        }
    }
</style>