import mailService from '../../services/mail-service.js'
export default {
  template: `
    <section class="mail-filter">
        <h1>Filter</h1>
        <button @click="filterRead">Show undead</button>
        <button @click="clear">Clear</button>
        <input @change="searchMail" v-model="searchedMail" type="text" placeholder="Search Mail">
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
    filterRead() {
      this.filteredEmails = this.mails.filter(mail => {
        return !mail.isRead
      })
      this.$emit('showFiltered', this.filteredEmails)
    },
    clear() {
      this.$emit('showFiltered', this.mails)
    },
    searchMail() {
      console.log(this.searchedMail)
      this.mails.forEach(element => {
        if (element.subject.includes(this.searchedMail)) {
          this.filteredEmails.push(element)
        }
      })
      this.$emit('showFiltered', this.filteredEmails)
      this.filteredEmails = []
    }

  }
}
