<template>
    <router-link :to="link" v-if="hasLink">
        <div class="card">
            <div class="card-image" :style="{ background: `url(${require('@/assets/img/wwa-projects/' + image)}) center center/cover` }">
                <img class="card-icon" :src="require(`@/assets/img/wwa-projects/${icon}`)" alt="Project Icon">
            </div>
            <div class="card-text">
                <p class="card-type body-2">{{ type }}</p>
                <h3 :style="{'color': color}" class="card-title">{{ title }}</h3>
                <h4 class="card-advocacy">{{ advocacy }}</h4>
            </div>
        </div>
    </router-link>

    <div class="card" v-if="!hasLink">
        <div class="card-image" :style="{ background: `url(${require('@/assets/img/wwa-projects/' + image)}) center center/cover` }">
            <img class="card-icon" :src="require(`@/assets/img/wwa-projects/${icon}`)" alt="Project Icon">
        </div>
        <div class="card-text">
            <p class="card-type body-2">{{ type }}</p>
            <h3 :style="{'color': color}" class="card-title">{{ title }}</h3>
            <h4 class="card-advocacy">{{ advocacy }}</h4>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        hasLink: Boolean,
        type: String,
        title: String,
        advocacy: String, 
        color: String,
        image: String, 
        icon: String,
        link: String,
    },
}
</script>

<style scoped>
    a {
        text-decoration: none;
        color: inherit;
    }

    .card {
        width: 100%;
        height: 270px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: white;
        filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.1));
    }

    .card-image {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items:center;
    }

    .card-icon {
        width: 88px;
    }

    .card-type {
        text-transform: uppercase;
    }

    .card-title {
        text-transform: uppercase;
        margin-bottom: 5px;
    }
    
    .card-text {
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 1.5rem 0;
    }

</style>