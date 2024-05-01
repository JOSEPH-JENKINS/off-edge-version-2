<template>
  <Navbar />
  <Hero />
  <Projects />
  <Problem />
  <Benefits />
  <Proof />
  <FAQ />
</template>

<script>
import Lenis from '@studio-freight/lenis'
import { defineAsyncComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'

export default {
  components: {
    Hero,
    Navbar,
    Projects: defineAsyncComponent(() => import('./components/Projects.vue')),
    Problem: defineAsyncComponent(() => import('./components/Problem.vue')),
    Benefits: defineAsyncComponent(() => import('./components/Benefits.vue')),
    Proof: defineAsyncComponent(() => import('./components/Proof.vue')),
    FAQ: defineAsyncComponent(() => import('./components/FAQ.vue'))
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
