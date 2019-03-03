import mailPreview from './mail-preview-cmp.js'
import mailDetails from './mail-details-cmp.js'
import mailFilter from './mail-filter-cmp.js'
import mailStatus from './status-cmp.js'

export default {
  template: `

        <section class="mail-list">
         <router-link @click.native="selectMail(mail)"  v-for="mail in mails" :key="mail.id" :to="mail.id" >
                   <mail-preview  
                       :mail="mail">
                   </mail-preview>

        </router-link>
        <mail-status :mails="mails"></mail-status>
    </section>
    
    `,
  props: ['mails'],
  components: {
    mailPreview,
    mailStatus,
    mailFilter,
  mailDetails},
  data() {
    return {
      mailNote: null,
      selectedMail: null,
      mailsToFilter: null
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
    this.mailsToFilter = this.mails
    console.log(this.mailsToFilter)
}}
