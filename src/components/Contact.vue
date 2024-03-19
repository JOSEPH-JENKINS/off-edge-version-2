<template>
  <section class="___section contact display" ref="contact" v-if="contactsOpened">
    <div class="contact___text">
      <h2 class="header___text contact___main___text">Contact us.</h2>
      <div class="contact___links">
        <div class="display___flex">
          <SocialLink link="mailto:offedgestudio@gmail.com" placeholder="Email" />
          <SocialLink link="https://www.facebook.com/offedgestudio" placeholder="Facebook" />
          <SocialLink link="https://www.instagram.com/off___edge" placeholder="Instagram" />
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
  },
  methods: {
    handleClick() {
      fbq('track', 'Booked', { value: 'yes' })
    }
  }
}
</script>
