<template>
    <nav>
        <div class="nav-primary">
            <img src="#" alt="TAYO logo">
        </div>
        <div class="nav-secondary">
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Projects</a>
            <a href="#">Who We Are</a>
            <a href="#">Contact Us</a>
        </div>
    </nav>
</template>

<script>

export default {
    name: 'Navbar'
}
var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
if (scrollTop >= 40) {
    document.querySelector('nav').style.backgroundColor = '#FFFFFF';
    document.querySelector('nav').style.position = 'fixed';

}
else if (scrollTop < 40) {
    document.querySelector('nav').style.backgroundColor = 'none';
    document.querySelector('nav').style.position = 'static';
}
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
        display: flex;
        padding: 48px 24px;
        justify-content: space-between;
    }

    nav a:hover {
        font-family: "Karla"; 
        /* font-weight: 700; */
        text-decoration: underline;
    }
</style>