import mailService from '../../services/mail-service.js'
import { eventBus } from '../../event-bus.js'
export default {
  template: `
    <section class="mail-filter">
        <h1>Filter</h1>
        <button @click="clear">Clear</button>
        <input @keyup="searchMail" v-model="searchedMail" type="text" placeholder="Search Mail">
    </section>
    `,
  props: ['mails'],
  data() {
    return {
      filteredEmails: [],
      searchedMail: ''
    }
  },
  methods: {
    clear() {
      this.searchedMail = ''
      eventBus.$emit('clearFilter')
    },
    searchMail() {
      this.filteredEmails = this.mails.filter(mail => {
        return mail.subject.includes(this.searchedMail)
      })
      console.log('filter====', this.filteredEmails)
      eventBus.$emit('showFiltered', this.filteredEmails, this.searchedMail)
      this.filteredEmails = []
    }

  }
}
