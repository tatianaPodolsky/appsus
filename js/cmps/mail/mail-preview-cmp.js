import { eventBus } from '../../event-bus.js'
export default {
  template: `
    <section  :class="{read:mail.isRead}" @click="checked(mail)" class="mail-preview flex space-between">
  <div class="flex">

      <input click.native.prevent.stop="checkAsRead" type="checkbox">
    <p>From: {{mail.from}} </p>
  </div>
            <p>Subject: {{mail.subject}}</p>
            <!-- <p>content: {{mail.body}}</p> -->
            <p>{{mail.time}}</p>

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
    checkedAsRead(mail) {
      console.log('we made it', mail)
    }

  },
  created() {
    eventBus.$emit('mailRead', this.mail)
  }
}
