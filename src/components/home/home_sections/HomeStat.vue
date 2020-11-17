<template>
    <div class="home-stat">
        <h1>{{ num }}</h1>
        <h3>{{ subj }}</h3>
    </div>
</template>

<script>
export default {
    name: "HomeStat",
    props: {
        num: String,
        subj: String,
    }
}
</script>

<style scoped>
    .home-stat {
        text-align: center;
        margin-right: 50px;
    }

    @media (max-width: 320px) {
        .home-stat {
            margin: 0;
        }

        .home-stat h1 {
            font-size: 2rem;
            line-height: 56px;
        }

        .home-stat h3 {
            font-size: 1rem;
            line-height: 24px;
        }
    }

    
</style>