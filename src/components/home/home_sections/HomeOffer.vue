<template>
  <div class="offer">
    <img class="offer-image" :src="require('@/assets/img/' + image)" alt="">
    <h2 class="offer-header">{{ title }}</h2>
  </div>
</template>

<script>
export default {
    name: "HomeOffer",
    props: {
        image: String,
        title: String,
    }
}
</script>

<style>
    .offer {
        text-align: center;
    }

    .offer-header {
        width: 200px;
    }

    .offer-image {
        width: 176px;
        margin-bottom: 1rem;
    }
</style>