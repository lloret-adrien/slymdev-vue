import { defineStore } from "pinia"

export const useNavStore = defineStore('nav', {
  actions: {
    openNav() {
      console.log('ENTER')
      this.state = this.opened ? 'close' : 'open' // On inverse afin de savoir si l'on ferme ou ouvre le menu
      setTimeout(() => {
        this.opened = !this.opened
      }, 300)
    },
  },
  state: () => ({
    opened: true,
    state: 'open',
  }),
})
