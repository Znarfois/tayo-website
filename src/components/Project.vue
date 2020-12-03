<template>
    <main>
        <section id="project-intro">
            <div class="project-logo">
                <img class="project-logo__img" :src="require(`../assets/img/projects/${logo}`)" alt="">
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
                    <p class="project-detail__par" v-for="(i, index) in who" :key="index" v-html="i"></p>
                </div>
            </div>  
            <img :src="require(`../assets/img/projects/${image1}`)" alt="">
            <div class="project-detail">
                <div class="project-detail__content">
                    <h1 class="project-detail__header">What</h1>
                    <p class="project-detail__par" v-for="(i, index) in what" :key="index" v-html="i"></p>
                </div>
            </div>  
            <img :src="require(`../assets/img/projects/${image2}`)" alt="">
            <div class="project-detail">
                <div class="project-detail__content">
                    <h1 class="project-detail__header">Why</h1>
                    <p class="project-detail__par" v-for="(i, index) in why" :key="index" v-html="i"></p>
                </div>
            </div>  
            <img :src="require(`../assets/img/projects/${image3}`)" alt="">
            <div class="project-detail volunteer">
                <div class="project-detail__content">
                    <h1 class="project-detail__header">Be one of ### volunteers!</h1>
                    <p class="project-detail__par" v-for="(i, index) in volunteer" :key="index" v-html="i"></p>
                    <form class="subscribe" action="">
                        <input type="text" placeholder="Email">
                        <button type="submit">Update Me</button>
                    </form>
                </div>
            </div>  
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
        who: Array,
        what: Array,
        why: Array,
        volunteer: Array,
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

    .project-logo__img {
        width: 160px;
        margin-top: 3rem;
    }

    .project-title {
        color: #375998;
        margin: 1rem 0 3rem;
    }

    .subscribe {
        width: 100%;
        
    }

    .subscribe input, .subscribe button {
        height: 50px;
        font-size: 16px;
    }

    .subscribe input {
        width: 60%;
        padding: 0 1rem;
        background: inherit;
        border: 1px solid #375998;
    }

    .subscribe button {
        background: #375998;
        width: 150px;
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

    .project-detail__par {
        margin-bottom: 50px;
    }

    .project-detail__header {
        color: #375998;
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 1024px) {
        .project-detail__content {
            width: 90%;
        }

        .project-details {
            width: 100%;
        }

        .project-detail {
            width: 80%;
            margin: 3rem auto;
        }

    }


    @media screen and (max-width: 500px) {
     
        img:not(.project-logo__img) {
            height: 200px;
            object-fit: cover;
        }
    
        .project-logo__img {
            margin-top: 3rem;
            width: 130px;
            height: 130px;
            object-fit: fill;
        }

        .project-title {
            color: #375998;
            font-size: 24px;
            margin: 0;
            position: relative;
            bottom: 20px
        }

        .project-detail__content {
            width: 90%;
            margin: 0 auto;
        }

        .project-detail {
            margin: 4rem auto;
            display: block;
            width: 100%;
        }

        .project-detail__header {
            font-size: 24px;
            line-height: 24px;
        }

        .project-detail__par {
            font-size: 16px;
            line-height: 32px;
        }

        .subscribe button {
            width: 100px;
        }
    }
   
</style>