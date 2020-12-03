<template>
    <nav>
        <div class='nav'>
            <div class='nav-content'>
                <div class="nav-primary">
                    <router-link to="/"><img :src="require('../assets/img/' + brand + '')" id="tayo-logo" alt="TAYO logo"></router-link>
                </div>
                <div class="nav-secondary">
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">Who We Are</router-link>
                    <router-link to="/projects/kidsforkids">Projects</router-link>
                    <router-link to="/services">Services</router-link>
                    <router-link to="/contactus">Contact Us</router-link>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'Navbar',
    data() {
        return {
            brand: "tayo-logo-black.png",
        }
    }
}
// var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
// if (scrollTop >= 40) {
//     document.querySelector('nav').style.backgroundColor = '#FFFFFF';
//     document.querySelector('nav').style.position = 'fixed';

// }
// else if (scrollTop < 40) {
//     document.querySelector('nav').style.backgroundColor = 'none';
//     document.querySelector('nav').style.position = 'static';
// }
var myNav = document.getElementsByClassName('nav-content');
window.onscroll = function () { 
    "use strict";
    if (window.scrollY >= 40 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else if (window.scrollY < 40 ){
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }

    if(this.$route.path === "/") {
        this.brand = "tayo-logo.png";
    }

    else if (this.$route.path !== "/") {
        this.brand = "tayo-logo-black.png";
        document.getElementsByTagName('a').style.color = '#000000';
    }
}
</script>

<style scoped>
    /* Import Fonts */
    @import url("https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap");

    nav {
        position: fixed;
        display: block;
        height: 80px;
        width: 100%;
        z-index: 4000;
    }

    .nav {
        display: block;
    }

    nav a {
        text-decoration: none;
        color: #000000;
        margin: 0 32px;
        padding-bottom: 4px;
        font-weight: 700;
    }

    .nav-content {
        display: flex;
        justify-content: space-between;
        padding: 12px 52px;
        align-items: center;
        background-color: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }

    nav img {
        width: 48px;
    }

    .nav-secondary a:hover {
        font-family: "Karla"; 
        /* font-weight: 700; */
        border-bottom: 4px solid #EAA200;
    }

    .nav-transparent {
        background-color: transparent;
        transition: background 0.25s ease-in-out 0s;
        box-shadow: none;
    }

    .nav-colored {
        background-color: #FFFFFF;
        color: #000000;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 4px;
    }

    @media screen and (max-width: 1300px) {

        .nav-content {
            padding: 12px 28px;
        }
        .nav-secondary a {
            margin: 0 24px;
            font-size: 16px;
            line-height: 24px;
        }
        
    }
</style>