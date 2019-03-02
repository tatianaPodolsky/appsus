import mailList from '../../cmps/mail/mail-list-cmp.js'
import mailNavbar from '../../cmps/mail/mail-navbar.js'
import mailService from '../../services/mail-service.js'
import { eventBus } from '../../event-bus.js'
import storageService from '../../services/storage-service.js'
export default {
  template: `
    <section class="mail-app">
        <h1>Mail App</h1>
        <div class="flex">
          <mail-navbar :mails="mails"></mail-navbar>
          <router-view :mails="mails"></router-view>
        </div>
    </section>
    `,
  data() {
    return {
      mails: [],
      filteredMails: null

    }
  },
  components: {
    mailList,
  mailNavbar},
  created() {
    mailService.getMails().then((res) => {
      if (!this.filteredMails) this.mails = res
      else this.mails = this.filteredMails
      console.log(this.mails)
    })
    eventBus.$on('mailUpdate', ((data) => {
      storageService.store('mails', this.mails)
      console.log('data', data)
    }))
    eventBus.$on('showFiltered', ((mails, str) => {
      console.log('sent maikls', mails)
      if (!mails.length && !str) { mailService.getMails().then((res) => {
          this.mails = res
          console.log('mails empty', this.mails)
          return
        })
      }
      console.log('ddddd', mails)
      this.filteredMails = mails
      this.mails = this.filteredMails
      console.log('this mails', this.mails)
    }))
    eventBus.$on('clearFilter', () => {
      mailService.getMails().then((res) => {
        this.mails = res
      })
    })
  }

}
