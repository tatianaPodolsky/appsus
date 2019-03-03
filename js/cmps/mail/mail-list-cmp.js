import mailPreview from './mail-preview-cmp.js'
import mailDetails from './mail-details-cmp.js'
import mailFilter from './mail-filter-cmp.js'
import mailStatus from './status-cmp.js'
import { eventBus } from '../../event-bus.js'
import mailService from '../../services/mail-service.js'
import utilService from '../../services/util-service.js'

export default {
  template: `

        <section class="mail-list">
              <mail-filter @showFiltered="filterEmails" :mails="mails"></mail-filter>
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
    },
    addMailFromNotes(note) {
      // debugger
      console.log('note in funciton', note)
      if (!this.mailNote) return
      var newMail = {
        from: 'Tania',
        time: {DB: Date.now()},
        id: note.id,
        subject: note.type,
        body: note.content,
        isRead: false
      }
      console.log('newmail form npte', newMail)
    // mailService.addMail(newMail)
    }

  },
  computed: {

  },
  watch: {
    // mailNote(o, n) {
    //   if (this.mailNote) this.addMailFromNotes(this.mailNote)
    // }
  },
  created() {
    this.mailNote = this.$route.query.note
    console.log('mail note', this.mailNote)
    this.addMailFromNotes(this.mailNote)
    this.mailsToFilter = this.mails
    console.log(this.mailsToFilter)
}}
