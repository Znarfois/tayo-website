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
            <button id='submit-btn' type="submit" @click="successSend">Send Message</button>
        </form>
        <img 
            alt="contact-asset"
            :src="require('@/assets/img/contact_us_asset.png')"
        />
        <!-- <div :style="successStyle" class="successDefault" id="success"> -->
        <div class="successDefault" id="successMsg" style="z-index:-1;">
            <span>Message successfully sent!</span>
            <img src="@/assets/img/exit_icon.png" v-on:click="successSend()">
        </div>
    </main>
</template>

<script>
import db from '../components/firebaseinit'
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

            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

            db.collection('Contacts').add({
            name: this.name,
            email: this.email,
            message: this.message,
            date: date,
            })
            .then(function(){
                console.log("Document successfully written!");
            })
            this.name = "";
            this.email = "";
            this.message = "";
            date = "";
            
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
    },
    // computed: {
    //     successStyle() {
    //         return {
    //             display: 'none',
    //         }
    //     }
    // }
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
            width: 43%;
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
            top: calc(100vh - 120px + 300px);
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
            transition: all 1s;
        }  

        .successDefault img {
            width: 32px;
            cursor: pointer;
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
    /* @media screen and (max-width: 1440px) {
        main img {
            width: 43%;
        }
    } */
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
            top: calc(100vh - 120px + 300px);
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