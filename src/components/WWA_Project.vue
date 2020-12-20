<template>
    <main>
        <section id="project-intro">
            <div class="project-logo">
                <img class="project-logo__img" :src="require(`../assets/img/wwa-projects/${logo}`)" alt="Project Logo">
            </div>
            <h1 class="project-title" :style="{'color': color}">{{ title }}</h1>
            <div class="project-header">
                <img :src="require(`../assets/img/wwa-projects/${header}`)" alt="Project Header Image">
            </div>
        </section>
        <section class="container project-details">
            <div class="project-detail">
                <div class="project-detail__content">
                    <h1 class="project-detail__header" :style="{'color': color}">Who</h1>
                    <p class="project-detail__par" v-for="(i, index) in who" :key="index" v-html="i"></p>
                </div>
            </div>  
            <img :src="require(`../assets/img/wwa-projects/${image1}`)" alt="Who Image">
            <div class="project-detail">
                <div class="project-detail__content">
                    <h1 class="project-detail__header" :style="{'color': color}">What</h1>
                    <p class="project-detail__par" v-for="(i, index) in what" :key="index" v-html="i"></p>
                </div>
            </div>  
            <img :src="require(`../assets/img/wwa-projects/${image2}`)" alt="What Image">
            <div class="project-detail">
                <div class="project-detail__content">
                    <h1 class="project-detail__header" :style="{'color': color}">Why</h1>
                    <p class="project-detail__par" v-for="(i, index) in why" :key="index" v-html="i"></p>
                </div>
            </div>  

            <img class="imgOriginal" :src="require(`../assets/img/wwa-projects/${image3}`)" alt="Why Image" v-if="isKfk">
            <img class="imgReplace" :src="require('../assets/img/wwa-projects/kfk/KFK_MOBILE.png')" alt="Why Image" v-if="isKfk">
            <div class="project-detail volunteer" v-if="isKfk">
                <div class="project-detail__content">
                    <h1 class="project-detail__header">Be one of {{ volunteersCount }} volunteers!</h1>
                    <p class="project-detail__par" v-for="(i, index) in volunteer" :key="index" v-html="i"></p>
                    <form class="subscribe" @submit.prevent="volunteerSend">
                        <input type="email" v-model="email">
                        <button type="submit" v-on:click="successSend()">Update Me</button>
                    </form>
                </div>
            </div>  
            <div class="successDefault" id="successMsg" style="z-index:-1;">
                <span>Your email address has been sent!</span>
                <img src="@/assets/img/exit_icon.png" v-on:click="successSend()">
            </div>
        </section>
    </main>
</template>

<script>

import db from '../components/firebaseinit'

export default {
    data: function () {
        return {
            volunteerForm: {
                email: '',
            }
        }
    },
    methods: {
        volunteerSend: function (evt) {
            evt.preventDefault();

            db.collection('Volunteers').add({
            email: this.email,
            })
            .then(function(){
                console.log("Document successfully written!");
            })
            this.email = "";

            evt.target.reset();
        },
        successSend() {
            var successMsg = document.querySelector('#successMsg');
            if (successMsg.style.zIndex == "-1") {
                successMsg.classList.add('success-msg');
                // successMsg.style.display = 'flex';
                successMsg.style.zIndex = "5";
            }
            else {
                successMsg.classList.remove('success-msg');
                // successMsg.style.display = 'none';
                successMsg.style.zIndex = "-1";
            }
            setTimeout(() => successMsg.classList.remove('success-msg'), 5000);
            setTimeout(() => successMsg.style.zIndex = "-1", 5000);
        },
    },
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
        volunteersCount: String,
        isKfk: Boolean,
        color: String,
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
        width: 200px;
        margin-top: 3rem;
    }

    .project-title {
        /* color: #375998; */
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

    .success-msg{
            top: 4700px !important;
            z-index: 5 !important;
            transition: all 1s !important; 
        }

        .successDefault {
            display: flex;
            top: 5000x;
            position: absolute;
            justify-content: space-between;
            width: 400px;
            height: 80px;
            background-color: #5AA3A9;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            color: #FAFAFA;
            align-items: center;
            padding: 0 16px 0 16px;
            right: 0;
            z-index: -1;
            transition: all 1s !important;
        }  

        .successDefault img {
            width: 32px;
            cursor: pointer;
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
        color: #385997;
        margin-bottom: 1rem;
    }

    .imgReplace {
        display: none;
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
        .success-msg{
            top: 3300px !important;
            transition: all 1s;
        }

        .successDefault {
            top: 3500x;
        }  
    }


    @media screen and (max-width: 600px) {
     
        img:not(.project-logo__img) {
            height: 200px;
            object-fit: cover;
        }
    
        .project-logo__img {
            margin-top: 3rem;
            width: 150px;
            height: 150px;
            object-fit: fill;
        }

        .project-title {
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

        .imgReplace {
            display: inline;
            height: auto !important;
        }

        .imgOriginal {
            display: none;
        }

        .success-msg{
            top: 2500px !important;
            transition: all 1s;
        }

        .successDefault {
            top: 2900x;
        }  

        .successDefault img {
            width: 32px;
            height: 32px;
        }
    }
   
</style>