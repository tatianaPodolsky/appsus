import mailPreview from './mail-preview-cmp.js'
import mailDetails from './mail-details-cmp.js'
import mailFilter from './mail-filter-cmp.js'
import { eventBus } from '../../event-bus.js'

export default {
  template: `

        <section class="mail-list">
            <h1>Email list</h1>
            <mail-filter @showFiltered="filterEmails" :mails="mails"></mail-filter>
         <router-link @click.native="selectMail(mail)"  v-for="mail in mailsToFilter" :key="mail.id" :to="mail.id">
            <mail-preview  
                :mail="mail">
            </mail-preview>
        </router-link>
    </section>
    
    `,
  props: ['mails'],
  components: {
    mailPreview,
    mailFilter,
  mailDetails},
  data() {
    return {
      selectedMail: null,
      mailsToFilter: this.mails
    }
  },
  methods: {
    selectMail(mail) {
      this.selectedMail = mail
      console.log(this.selectedMail)
    },
    filterEmails(emails) {
      console.log('filteredM', emails)
      this.mailsToFilter = emails
    }

  },
  created() {
    console.log(this.mailsToFilter)
  }
}
