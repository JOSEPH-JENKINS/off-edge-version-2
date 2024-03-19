<template>
  <section class="___section projects display" ref="projects" v-if="projectsOpened">
    <div class="contain___elements">
      <h1 class="header___text project___head">
        Some of our projects <span class="project___count differ___text">(4)</span>
      </h1>
      <div class="projects___list">
        <Project
          title="Manfitter"
          category="Fashion"
          link="https://www.manfitter.co.uk"
          image="/manfitter-logotype.png"
        />
        <Project
          title="Model88E"
          category="Fashion"
          link="https://www.model88e.com"
          image="/model88e-logotype.jpg"
        />

        <Project
          title="Adam Small"
          category="Fashion"
          link="https://www.behance.net/gallery/169930709/By-Adam-Small-Products-Page"
          image="/cover-one.png"
        />
        <Project
          title="HeyGen"
          category="AI"
          link="https://www.behance.net/gallery/170306227/HeyGen-UNFINISHED-VENTURE"
          image="/cover-two.png"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { useStore } from '../../stores/main'
import { storeToRefs } from 'pinia'
import Project from './Project.vue'

export default {
  setup() {
    const store = useStore()
    const { projectsOpened } = storeToRefs(store)

    return { store, projectsOpened }
  },
  components: {
    Project
  }
}
</script>
