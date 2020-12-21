<template>
    <vueper-slides fixed-height="79vh">
        <vueper-slide
        v-for="(image, i) in slideshow"
        :key="i"
        :image="image" />
    </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide },
  props: {
      slideshow: Array,
  }
}
</script>

<style>

</style>