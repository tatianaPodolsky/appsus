import { eventBus } from '../../event-bus.js'
import mailService from '../../services/mail-service.js'
export default {
  template: `
    <section  :class="{read:mail.isRead}" @click="checked(mail)" class="mail-preview flex space-between">
  <div class="flex checkbox-container">
<div  @click.prevent.stop="checkAsRead(mail)">
 <img v-if="mail.isRead" src="https://img.icons8.com/metro/26/000000/checked-checkbox.png">
  <img v-if="!mail.isRead" src="https://img.icons8.com/ios/50/000000/unchecked-checkbox.png">
</div>
    <p>From: {{mail.from}} </p>
  </div>
            <p>Subject: {{mail.subject}}</p>
            <p>{{mail.time.display}}</p>
  <button style="border:none;background:none" @click.prevent.stop="reply(mail)">
    <img width="20" src="https://img.icons8.com/metro/50/000000/reply-all-arrow.png">
  </button>

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
      setTimeout(function () {
        mail.isRead =
          eventBus.$emit('replyMail', mail)
      }, 0)
      this.$router.push({path: 'compose'})
    },
    delete(mail) {
      console.log('mail to delete', mail)
      mailService.removeMail(mail)
    }

  },

  created() {
    eventBus.$emit('mailRead', this.mail)
  }
}
