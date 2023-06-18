<template>
  <section class="___section projects display" ref="projects" v-if="projectsOpened">
    <div class="contain___elements">
      <h1 class="header___text project___head">Selected Projects</h1>
      <div class="projects___list">
        <Project
          title="Adam Small"
          category="Fashion"
          link="https://www.behance.net/gallery/169930709/By-Adam-Small-Products-Page"
          image="/cover-one.png"
        />
        <Project
          title="HeyGen"
          category="AI web design"
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
