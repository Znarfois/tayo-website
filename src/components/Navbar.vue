<template>
    <nav id='nav'>
        <div class="nav-primary">
            <img src="../assets/img/tayo-logo.png" alt="TAYO logo">
        </div>
        <div class="nav-secondary">
            <router-link to="/">Home</router-link>
            <router-link to="/about">Who We Are</router-link>
            <router-link to="/projects/kidsforkids">Projects</router-link>
            <router-link to="/services">Services</router-link>
            <router-link to="/contactus">Contact Us</router-link>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'Navbar'
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
var myNav = document.getElementById('nav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 40 || document.documentElement.scrollTop >= 40 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};
</script>

<style scoped>
    /* Import Fonts */
    @import url("https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap");
    
    nav a {
        text-decoration: none;
        color: #000000;
        padding: 0 12px;
    }

    nav {
        position: fixed;
        display: flex;
        padding: 48px 24px;
        justify-content: space-between;
    }

    nav img {
        width: 48px;
    }

    nav a:hover {
        font-family: "Karla"; 
        /* font-weight: 700; */
        text-decoration: underline;
    }

    .nav-transparent {
        background-color: transparent;
    }

    .nav-colored {
        background-color: #FFFFFF;
        z-index: 4000;
    }
</style>