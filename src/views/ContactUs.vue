<template>
    <main> 
        <form @submit.prevent="contactSend">
            <h1>Let's Work Together</h1>
            <p>Full Name</p>
            <input type="text" id="name-input" v-model="name">
            <p>Email</p>
            <input id="email-input" type="email" v-model="email">
            <p>Message</p>
            <textarea id="message-input" v-model="message"></textarea>
            <button id='submit-btn' type="submit">Send Message</button>
        </form>
        <img 
            alt="contact-asset"
            :src="require('@/assets/img/contact_us_asset.png')"
        />
        <div class="success-msg">
            <span>Message successfully sent!</span>
        </div>
    </main>
</template>

<script>

const firebaseConfig = {
  apiKey: "AIzaSyC9Vsa6Md62rE_fK8cM5u5R0_L1ZQrn8iE",
  authDomain: "tayo-c846e.firebaseapp.com",
  databaseURL: "https://tayo-c846e.firebaseio.com",
  projectId: "tayo-c846e",
  storageBucket: "tayo-c846e.appspot.com",
  messagingSenderId: "91886545753",
  appId: "1:91886545753:web:9574d19c0fa60bbe80ba48",
  measurementId: "G-6XESH3H38B"
};

import firebase from 'firebase/app'
import 'firebase/firestore'
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();


export default {
    data: function () {
        return {
            contactForm: {
                name: '',
                email: '',
                message: '',
            }
        }
    },
    methods: {
        
        contactSend: function (evt) {
            evt.preventDefault();

            db.collection('Contacts').add({
            name: this.name,
            email: this.email,
            message: this.message,
            })
            .then(function(){
                console.log("Document successfully written!");
            })
            this.name = "";
            this.email = "";
            this.message = "";

            evt.target.reset();
        }
    }
}

</script>

<style scoped>
    html, body {
        width: 100vw;
        overflow: hidden;
    }
    main {
        padding: 80px 0 80px 10%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

        form {
            width: 100vw;
        }

        main img {
            width: 60%;
        }
    
        .success-msg{
            display: none;
            position: absolute;
            translate: -716px;
            width: 400px;
            height: 80px;
            background-color: #5AA3A9;
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            color: #FAFAFA;
            display: flex;
            align-items: center;
            padding: 0 0 0 16px;
            top: 716px;
            right: -400px;
            -webkit-animation: slide 0.5s forwards;
            -webkit-animation-delay: 2s;
            animation: slide 0.5s forwards;
            animation-delay: 2s;
        }

        p {
            font-size: 20px;
            line-height: 40px;
        }

        h1 {
            font-size: 32px;
            line-height: 48px;
            margin: 0 0 14px 0;
        }

        input, textarea{
            display: block;
            background: transparent;
            font-size: 14px;
            line-height: 1.2;
            padding: 10px;
            width: 46vw;
            max-width: 800px;
            border: 2px solid #d2d2d2;
            border-radius: 5px;
            margin: 0 0 20px 0;
            opacity: 0.5;
        }   

        textarea {
            height: 14%;
            margin-bottom: 20px
        }

        button {
            width: 208px;
            height: 64px;
            background-color: #EAA200;
            color: #FFFFFF;
        }

        /* textarea {
            rows: '4';
        } */
    @media screen and (max-width: 1440px) {
        main img {
            width: 43%;
        }
    }
    @media screen and (max-width: 1024px) {
        main img {
            display: none;
        }

        input, textarea {
            width: 90%;
        }

        button {
            width: 90%;
            height: 48px;
        }
    }
</style>