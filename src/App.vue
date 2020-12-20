<template>
<main>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <title>TAYO PH</title>
  <meta property="og:title" content="TAYO PH" />
  <meta developer="Franz Taborlupa" site="https://github.com/Znarfois">
  <meta developer="Renzo Tan" site="https://github.com/renzotimtan">
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://tayo.com.ph" />
  <meta property="og:image" content="https://tayo.com.ph/img/homeheader.8b71f130.jpg" />
  <meta property="og:image:secure_url" content="https://tayo.com.ph/img/homeheader.8b71f130.jpg" />
  <meta property="og:site_name" content="TAYO PH" />
  <meta property="og:description"
    content="Where sustainability meets creativity." />
  <meta name="description"
    content="Where sustainability meets creativity." />
  <Navbar />
  <router-view />
  <Footer />
</main>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
  }
}
</script>


