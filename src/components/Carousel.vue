<template>
    <div>
        <vueper-slides fixed-height="79vh" autoplay v-if="isAuto">
            <vueper-slide
            v-for="(image, i) in slideshow"
            :key="i"
            :image="image" />
        </vueper-slides>
        <vueper-slides fixed-height="79vh" autoplay v-else>
            <vueper-slide
            v-for="(image, i) in slideshow"
            :key="i"
            :image="image" />
        </vueper-slides>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide },
  props: {
      slideshow: Array,
      isAuto: Boolean,
  },
}
</script>

<style>

</style>