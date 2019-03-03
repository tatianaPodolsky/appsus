import { eventBus } from '../../event-bus.js'

export default {
  template: `
    <section class="mail-navbar flex column">
    <router-link @click.native.stop="clear" to="/mail-app/inbox">
       <div class="unread-msg-container">
           <span>inbox</span>
          <span v-if="unreadCount" class="unread-msg-count" >{{unreadCount}}</span> 
       </div> 
    </router-link> 
        <router-link to="/mail-app/compose">Compose</router-link>
                <a @click="filterRead">Unread</a>
    </section>
    `,
  props: ['mails'],
  data() {
    return {
      unreadCount: 0
    }
  },
  methods: {
    filterRead() {
      this.filteredEmails = this.mails.filter(mail => {
        return !mail.isRead
      })
      eventBus.$emit('showFiltered', this.filteredEmails)
    },
    clear() {
      eventBus.$emit('clearFilter')
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
