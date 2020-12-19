<template>
    <main> 
        <form @submit.prevent="requestSend">
            <h1>Request For Portfolio</h1>
            <div class="input-info">
            <p>Full Name</p>
            <input type="text" class="full-width" v-model="name">
            </div>
            <div class="input-grid">
                <div class="input-info">
                    <p>Email</p>
                    <input type="email" v-model="email">
                </div>
                <div class="input-info">
                    <p>Phone</p>
                    <input type="text" v-model="phone">
                </div>
            </div>
            <div class="input-grid">
                <div class="input-info">
                    <p>Job/Position</p>
                    <input type="text" v-model="job">
                </div>
                <div class="input-info">
                    <p>Company</p>
                    <input type="text" v-model="company">
                </div>
            </div>
            <div class="input-info">
            <p>Reason for Request</p>
            <textarea class="full-width" v-model="reason"></textarea>
            </div>
            <button type='submit' @click="successSend">Send Message</button>
            <span>Expect a response within seven (7) working days.</span>
            <div class="successDefault" id="successMsg" style="z-index:-1;">
                <span>Message successfully sent!</span>
                <img src="@/assets/img/exit_icon.png" v-on:click="successSend()">
            </div>
        </form>
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
                phone: '',
                job: '',
                company: '',
                reason: '',
            }
        }
    },
    methods: {
        
        requestSend: function (evt) {
            evt.preventDefault();

            db.collection('Requests').add({
            name: this.name,
            email: this.email,
            phone: this.phone,
            job: this.job,
            company: this.company,
            reason: this.reason,
            })
            .then(function(){
                console.log("Document successfully written!");
            })
            this.name = "";
            this.email = "";
            this.phone = "";
            this.job = "";
            this.company = "";
            this.reason = "";

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
        }
    }
}
</script>

<style scoped>
    main {
        padding: 80px 10% 80px 10%;
    }

    form {
        width: 100%;
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
        display: inline-block;
        background: transparent;
        font-size: 14px;
        line-height: 1.2;
        padding: 10px;
        width: 100%;
        border: 2px solid #d2d2d2;
        border-radius: 5px;
        margin: 0 0 20px 0;
        opacity: 0.5;
    }   

    .input-grid {
        display: flex;
        flex-direction: row;
    }

    .input-grid .input-info {
        width: 100%;
    }

    .input-grid .input-info:first-child{
        padding: 0 32px 0 0;
    }

    /* p {
        width: 40%;
        display: inline-block;
    } */

    textarea {
        height: 168px;
        margin-bottom: 72px;
        width: 100%;
    }

    button {
        display: block;
        width: 208px;
        height: 64px;
        background-color: #EAA200;
        color: #FAFAFA;
    }

    form span {
        display: block;
        margin: 20px 0 0 0;
        font-size: 16px;
        line-height: 32px;
        color: #333333;
        opacity: 0.5;
    }

    .success-msg{
        top: calc(100vh - 120px) !important;
        z-index: 5 !important;
        transition: all 1s;
    }
  
    .successDefault {
        display: flex;
        top: calc(100vh - 120px + 450px);
        position: absolute;
        justify-content: space-between;
        width: 400px;
        height: 80px;
        background-color: #5AA3A9;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        align-items: center;
        padding: 0 16px 0 16px;
        right: 0;
        z-index: -1;
        transition: all 1s;
    }  

    .successDefault span {
        color: #FAFAFA;
        margin-top: 0;
        opacity: 1;
    }

    .successDefault img {
        cursor: pointer;
    }

    .full-width {
        width: 100%;
    }

    /* textarea {
        rows: '4';
    } */

    @media screen and (max-width: 768px) {
        .input-grid {
            flex-direction: column;
        }

        .input-grid .input-info:first-child{
            padding: 0;
        }

        textarea {
            height: 168px;
            margin-bottom: 36px;
            width: 100%;
        }

        .success-msg{
            top: calc(100vh - 120px) !important;
            /* transition-delay: 5s; */
            z-index: 5 !important;
            transition: all 1s;
        }
        /* @keyframes slideup {
            0%{top: calc(100vh - 120px + 300px)}
            100%{top: calc(100vh - 120px)}
        } */
        .successDefault {
            display: flex;
            top: calc(100vh - 120px + 800px);
            position: absolute;
            justify-content: space-between;
            width: 300px;
            height: 80px;
            border-radius: 5px;
            align-self: center;
            right: calc(50vw - 150px);
            z-index: -1;
            transition: all 1s;
        }  
        .success-msg img {
            display: block;
        }
    }
</style>