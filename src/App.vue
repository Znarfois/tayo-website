<template>
  <Navbar />
  <Services />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Services from "./views/Services.vue";

export default {
  name: 'App',
  components: {
    Navbar,
    Services
  }
}
</script>

