<template>
  <section class="___section nav___flex">
    <div class="nav___div">
      <a class="nav___link nav___text pointer header___text" @click="openProjects">
        <h1>Projects</h1>
      </a>
      <a class="nav___link nav___text pointer header___text" @click="openContacts">
        <h1>Contact</h1>
      </a>
    </div>
    <h1 class="___time header___text">09:03 AM</h1>
  </section>
</template>

<script>
import { useStore } from '../../stores/main'

export default {
  setup() {
    const store = useStore()
    return { store }
  },
  methods: {
    formatTime(hours, minutes) {
      const period = hours >= 12 ? 'PM' : 'AM'
      hours = hours % 12 || 12
      const formattedHours = hours.toString().padStart(2, '0')
      const formattedMinutes = minutes.toString().padStart(2, '0')
      return `${formattedHours}:${formattedMinutes} ${period}`
    },
    updateClock() {
      const clockElement = document.querySelector('.___time')
      const currentTime = new Date()
      const hours = currentTime.getHours()
      const minutes = currentTime.getMinutes()
      const formattedTime = this.formatTime(hours, minutes)
      clockElement.textContent = formattedTime

      requestAnimationFrame(this.updateClock)
    },
    openContacts(event) {
      event.preventDefault()
      this.store.toggleContactsOpened()
    },
    openProjects(event) {
      event.preventDefault()
      this.store.toggleProjectsOpened()
    }
  },
  mounted() {
    requestAnimationFrame(this.updateClock)
  }
}
</script>
