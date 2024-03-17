import { defineStore } from 'pinia'

export const useStore = defineStore('sections_state', {
  state() {
    return {
      contactsOpened: false,
      projectsOpened: true
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
