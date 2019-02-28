import mailService from '../../services/mail-service.js'
export default {
  template: `
    <section class="mail-filter">
        <h1>Filter</h1>
        <button @click="filter">Filter</button>
        <button @click="clear">Clear</button>
    </section>
    `,
  props: ['mails'],
  data() {
    return {
      filteredEmails: []
    }
  },
  methods: {
    filter() {
      this.filteredEmails = this.mails.filter(mail => {
        return mail.isRead
      })
      this.$emit('showFiltered', this.filteredEmails)
    },
    clear() {
      this.filteredEmails = []
    }

  }
}
