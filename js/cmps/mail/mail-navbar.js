import { eventBus } from '../../event-bus.js'

export default {
  template: `
    <section class="mail-navbar flex column">
    <router-link to="/mail-app/inbox">
       <div class="unread-msg-container">
           <span>inbox</span>
          <span v-if="unreadCount" class="unread-msg-count" >{{unreadCount}}</span> 
       </div> 
    </router-link> 
        <router-link to="/mail-app/compose">Compose</router-link>
    </section>
    `,
  props: ['mails'],
  data() {
    return {
      unreadCount: 0
    }
  },

  created() {
    eventBus.$on('mailRead', (() => {
      var unreadMails = this.mails.filter(mail => {
        return !mail.isRead
      })
      this.unreadCount = unreadMails.length
    }))
  }

}
