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
</script>

<style scoped>
    nav a {
        text-decoration: none;
        color: #000000;
    }

    nav {
        display: flex;
        padding: 48px 0;
        justify-content: space-between;
    }

</style>