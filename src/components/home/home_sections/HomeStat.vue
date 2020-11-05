<template>
    <div class="home-stat">
        <h1>{{ num }}</h1>
        <p>{{ subj }}</p>
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

<style>
    .home-stat {
        text-align: center;
    }
</style>