<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Who We Are</router-link> |
    <router-link to="/projects/kidsforkids">Kids For Kids</router-link>
  </div>
  <router-view/>
  <Footer />
</template>

<script>
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer,
  }
}
</script>


