<template>
    <main>
        <section id="project-intro">
            <div class="project-logo">
                <img :src="require(`../assets/img/projects/${logo}`)" alt="">
            </div>
            <h1 class="project-title">{{ title }}</h1>
            <div class="project-header">
                <img :src="require(`../assets/img/projects/${header}`)" alt="">
            </div>
        </section>
        <section class="container project-details">
            <div class="project-detail">
                <div class="project-detail__content">
                    <h1 class="project-detail__header">Who</h1>
                    <p class="project-detail__par">{{ who }} </p>
                </div>
            </div>  
            <img :src="require(`../assets/img/projects/${image1}`)" alt="">
            <div class="project-detail">
                <div class="project-detail__content">
                    <h1 class="project-detail__header">What</h1>
                    <p class="project-detail__par">{{ what }}</p>
                </div>
            </div>  
            <img :src="require(`../assets/img/projects/${image2}`)" alt="">
            <div class="project-detail">
                <div class="project-detail__content">
                    <h1 class="project-detail__header">Why</h1>
                    <p class="project-detail__par">{{ why }}</p>
                </div>
            </div>  
            <img :src="require(`../assets/img/projects/${image3}`)" alt="">
            <div class="project-detail">
                <div class="project-detail__content">
                    <h1 class="project-detail__header">Be one of ### volunteers!</h1>
                    <p class="project-detail__par">{{ volunteer }}</p>
                </div>
            </div>  
            <form class="subscribe" action="">
                <input type="text">
                <button type="submit">Update Me</button>
            </form>
        </section>
    </main>
</template>

<script>
export default {
    props: 
    {
        logo: String,
        title: String,
        header: String,
        image1: String,
        image2: String,
        image3: String,
        who: String,
        what: String,
        why: String,
        volunteer: String
    }
}
</script>

<style scoped>

    img {
        width: 100%;
    }

    #project-intro {
        text-align:  center;
    }

    .project-logo img {
        width: 160px;
        margin-top: 3rem;
    }

    .project-title {
        color: #375998;
        margin: 1rem 0 3rem;
    }

    .subscribe {
        width: 50%;
        margin-left: auto;
        height: 64px;
        margin-bottom: 5rem;
    }

    .subscribe input {
        width: 70%;
        height: 100%;
        font: inherit;
        font-size: 24px;
        padding: 0 2rem;
    }

    .subscribe button {
        background: #375998;
        width: 30%;
        height: 100%;
        font-size: 24px;
        position: relative;
        right: 10px;
    }

    .project-detail {
        margin: 7rem auto;
        display: flex;
        justify-content: flex-end;
    }

    .project-detail__content {
        width: 50%;
    }

    .project-detail__header {
        color: #375998;
        margin-bottom: 1rem;
    }
   


</style>