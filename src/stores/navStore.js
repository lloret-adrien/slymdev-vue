import { defineStore } from "pinia"

export const useNavStore = defineStore('nav', {
  actions: {
    openNav() {
      this.opened = !this.opened
    },
  },
  state: () => ({
    opened: true,
  }),
})
