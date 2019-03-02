import { eventBus } from '../../event-bus.js'
export default {
  template: `
    <section  :class="{read:mail.isRead}" @click="checked(mail)" class="mail-preview flex space-between">
  <div class="flex">

      <input @click.prevent.stop="checkAsRead(mail)" type="checkbox">
    <p>From: {{mail.from}} </p>
  </div>
            <p>Subject: {{mail.subject}}</p>
            <!-- <p>content: {{mail.body}}</p> -->
            <p>{{mail.time}}</p>
  <button @click.prevent.stop="reply(mail)">Reply</button>
    </section>
    
    `,
  data() {
    return {
    }
  },
  components: {

  },

  props: ['mail'],
  methods: {
    checked(mail) {
      mail.isRead = true
      eventBus.$emit('mailRead', mail)
      eventBus.$emit('mailUpdate', mail)
    },
    checkAsRead(mail) {
      mail.isRead = !mail.isRead
      eventBus.$emit('mailRead', mail)
      eventBus.$emit('mailUpdate', mail)
    },
    reply(mail) {
      this.$router.push({path: 'compose'})
      eventBus.$emit('replyMail',mail)
    }

  },
  created() {
    eventBus.$emit('mailRead', this.mail)
  }
}
