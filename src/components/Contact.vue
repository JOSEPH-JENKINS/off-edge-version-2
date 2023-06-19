<template>
  <section class="___section contact display" ref="contact" v-if="contactsOpened">
    <div class="contact___text">
      <h2 class="header___text contact___main___text">
        Want to give us a brief of your project? <br />
        <span class="channel___orange">Pricing starts at $5K</span>
      </h2>
      <div class="contact___links">
        <a href="mailto:offedgestudio@gmail.com">
          <SocialLink link="mailto:offedgestudio@gmail.com" placeholder="Email contact" />
        </a>
        <div class="display___flex">
          <SocialLink link="https://www.instagram.com/off___edge" placeholder="Instagram" />
          <SocialLink link="https://www.linkedin.com/company/off-edge" placeholder="Linkedin" />
          <SocialLink link="https://www.twitter.com/off___edge" placeholder="Twitter" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineAsyncComponent, watch } from 'vue'
import { useStore } from '../../stores/main'
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useStore()
    const { contactsOpened } = storeToRefs(store)

    return { contactsOpened }
  },
  components: {
    SocialLink: defineAsyncComponent(() => import('./SocialLink.vue'))
  }
}
</script>
