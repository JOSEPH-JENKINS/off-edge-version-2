<template>
  <Model />
  <Navbar />
  <About />
  <Projects />
  <Contact />
</template>

<script>
import About from './About.vue'
import Contact from './Contact.vue'
// import Projects from './Projects.vue'
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    Model: defineAsyncComponent(() => import('./Model.vue')),
    About,
    Projects: defineAsyncComponent(() => import('./Projects.vue')),
    Contact,
    Navbar: defineAsyncComponent(() => import('./Navbar.vue'))
  }
}
</script>
