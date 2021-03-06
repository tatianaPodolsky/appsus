import mailService from '../../services/mail-service.js'
import { eventBus } from '../../event-bus.js'
export default {
  template: `
    <section class="mail-filter">
        <button @click="clear">Clear</button>
        <input @keyup="searchMail" v-model="searchedMail" type="text" placeholder="Search Mail">
    </section>
    `,
  props: ['data'],
  data() {
    return {
      filteredEmails: [],
      searchedMail: ''
    }
  },
  methods: {
    filterRead() {
      this.filteredEmails = this.data.filter(mail => {
        return !mail.isRead
      })
      eventBus.$emit('showFiltered', this.filteredEmails)
    },
    clear() {
      this.searchedMail = ''
      eventBus.$emit('clearFilter')
    },
    searchMail() {
      this.filteredEmails = this.data.filter(mail => {

        return mail.subject.toLowerCase().includes(this.searchedMail.toLowerCase())
      })
      eventBus.$emit('showFiltered', this.filteredEmails, this.searchedMail)
      this.filteredEmails = []
    }

  }
}
