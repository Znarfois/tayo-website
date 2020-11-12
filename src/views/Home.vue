<template>
  <Header isHome=true background="homeheader.png"/>
  <HomeMain />
</template>

<script>
import Header from '../components/Header'
import HomeMain from '../components/home/HomeMain'

export default {
  components: {
    Header, 
    HomeMain,
  }
}
</script>
