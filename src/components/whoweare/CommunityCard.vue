<template>
    <div class="comm-card">
        <div class="comm-card-image"></div>
        <div class="comm-card-text">
            <h3 class="comm-title">{{ title }}</h3>
            <p class="body-2 comm-partner">{{ partner }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        partner: String,
    }
}
</script>

<style scoped>
    .comm-card {
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: white;
        filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
    }

    .comm-card-image {
        width: 100%;
        height: 50%;
        background: lightgrey;
    }

    .comm-card-text {
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>