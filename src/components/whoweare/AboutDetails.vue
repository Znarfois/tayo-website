<template>
  <div class="who-detail">
      <div class="detail-image" style="width: 120px; height:120px; background: lightgrey"></div>
      <p>{{ detail }}</p>
  </div>
</template>

<script>
export default {
    props: {
        detail: String,
    }
}
</script>

<style scoped>
    .who-detail {
        max-width: 488px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .detail-image {
        margin-bottom: 16px;
    }

    @media screen and (max-width: 1250px) {
        .who-detail {
         margin: 50px 0;
        }
    }

    @media screen and (max-width: 767px) {
        .who-detail {
            align-items: flex-start;
            text-align: left;
        }
    }



</style>