<template>
  <section id="home-stats">
      <div class="home-stats__content">
        <HomeStat num="21" subj="clients & partners" />
        <HomeStat num="24,433" subj="cumulative media reach" />
        <HomeStat num="16" subj="beneficiaries" />
      </div>
  </section>
</template>

<script>
import HomeStat from "./HomeStat"
export default {
    name: "HomeStats",
    components: {
        HomeStat, 
    }
}
</script>

<style scoped>
    #home-stats {
        background: #F9F4EE;
        padding: 40px 0;
    }

    .home-stats__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 80%;
        height: 100%;
        margin: auto;
    }

    @media (max-width: 320px){
        #home-stats {
            height: 340px;
            padding: 30px 0;
        }

        .home-stats__content {
            flex-direction: column;
        }
    }
</style>