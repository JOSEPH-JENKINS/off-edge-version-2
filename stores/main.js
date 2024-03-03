import { defineStore } from 'pinia'

export const useStore = defineStore('sections_state', {
  state() {
    return {
      contactsOpened: true,
      projectsOpened: false
    }
  },
  actions: {
    toggleContactsOpened() {
      this.contactsOpened = !this.contactsOpened
      this.projectsOpened = false
    },
    toggleProjectsOpened() {
      this.projectsOpened = !this.projectsOpened
      this.contactsOpened = false
    }
  }
})
