<template>
  <!-- <Preloader v-if="isLoading" :loadingPercent="loadingPercentage" /> -->
  <Main></Main>
</template>

<script>
import Lenis from '@studio-freight/lenis'
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Main: defineAsyncComponent(() => import('./components/Main.vue'))
  },
  mounted() {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    })

    requestAnimationFrame(this.raf)
  },
  methods: {
    raf(time) {
      this.lenis.raf(time)
      requestAnimationFrame(this.raf)
    }
  }
}
</script>
