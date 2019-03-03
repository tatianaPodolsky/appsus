// import keepApp from '../../pages/keep/keep-app.js'
import { eventBus } from '../../event-bus.js'

export default {
  // props: ['notes'],
  template: `
    <section class="keep-search">
        <input v-model="inputSearch" placeholder="Search notes" @keyup="setFilter">
        <button @click="setFilter"><i class="fas fa-search"></i></button>
    </section>
    `,
  data() {
    return {
      inputSearch: ''
    }
  },
  methods: {
    setFilter() {
      eventBus.$emit('filterBy', this.inputSearch)
    }
  }
}
