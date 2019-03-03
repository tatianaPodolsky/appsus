import mailService from '../../services/mail-service.js'
import utilService from '../../services/util-service.js'
import storageService from '../../services/storage-service.js'
import { eventBus } from '../../event-bus.js'
export default {
  template: `
    
    <form  class=" compose-mail flex column">
    <div v-if="sent">
      <h1>Email sent succsesfully!</h1>
    </div>
    <div v-if="!sent">
    <div>
      <h1>New Massage</h1>
        <label>From:</label> <input ref="nameInput" v-model="newMail.from" type="text">
      </div> 
      <div>
        <label>Subject:</label> <input v-model="newMail.subject" type="text">
        <h1>{{newMail.subject}}</h1>
       </div>
       <div> 
         <label>Body:</label> <textarea rows="10" v-model="newMail.body"></textarea>
        </div>
  
       <button v-if="!isReplyMode" @click="sendMail">Send</button>
       <button v-if="isReplyMode" @click="reply" type="button">Replay</button>
       <button type="button" @click="sendToKeep">Send to keep</button>
       
      </div>
    </form>
 
    `,
  data() {
    return {
      obj: null,
      newMail: {
        id: utilService.makeId(),
        subject: '',
        isRead: false,
        time: {display: null,DB: Date.now()}
      },
      sent: false,
      isReplyMode: false,
      prefix: 'RE: '
    }
  },

  methods: {
    sendMail() {
      this.getTimeToDisplay()
      mailService.addMail(this.newMail)
      this.sent = true
      console.log(this.sent)
      setTimeout(function () {
        history.go(-1)
        this.sent = false
      }, 1000)
    },
    reply() {
      history.go(-1)
      this.isReplyMode = true
    },
    sendToKeep() {
      this.getTimeToDisplay()
      eventBus.$emit('sendAsNote', this.newMail)
      console.log('Send to keep', this.newMail)
    },
    getTimeToDisplay() {
      var date = new Date()
      var hours = date.getHours()
      var mins = date.getMinutes()
      if (hours.toString().length < 2) hours = '0' + hours
      if (mins.toString().length < 2) mins = '0' + mins
      console.log('mins:', mins)
      console.log(mins.toString().length, 'length')
      this.newMail.time.display = `${hours}:${mins}`
    }

  },

  created() {
    eventBus.$on('replyMail', data => {
      this.newMail = data

      setTimeout(() => {
        this.newMail.subject = this.prefix + this.newMail.subject
        this.isReplyMode = true
      }, 0)
    }),
    eventBus.$on('sentNote', data => {
      setTimeout(console.log('sent Note (compose)', data.content), 1000)})
      
  },

  mounted() {
    this.$refs.nameInput.focus()
  },
  beforeDestory() {
    eventBus.$off('replyMail')
  }
}
