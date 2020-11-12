<template>
    <div class="home-stat">
        <h1>{{ num }}</h1>
        <h2>{{ subj }}</h2>
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
</style>