<template>
    <div class="card">
        <div class="card-image"></div>
        <div class="card-text">
            <p class="card-type body-2">{{ type }}</p>
            <h3 class="card-title">{{ title }}</h3>
            <h3 class="card-advocacy">{{ advocacy }}</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: String,
        title: String,
        advocacy: String, 
    }
}
</script>

<style scoped>
    .card {
        width: 100%;
        height: 352px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: white;
        filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
    }

    .card-image {
        width: 100%;
        height: 40%;
        background: lightgrey;
    }

    .card-type {
        text-transform: uppercase;
    }

    .card-title {
        text-transform: uppercase;
    }
    
    .card-text {
        width: 100%;
        height: 60%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

</style>