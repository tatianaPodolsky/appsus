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
         <label>Body:</label> <textarea rows="10" v-model="newMail.body">
           </textarea>
         
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
      mailNote: null,
      newMail: {
        id: utilService.makeId(),
        subject: '',
        isRead: false,
        time: {display: null,DB: Date.now()
        }
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
      setTimeout(() => {
        this.$router.push({ path: '/keep-app', query: { mail: this.newMail.body  }})
      }, 1)
    // eventBus.$emit('sendAsNote', this.newMail)
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
<<<<<<< HEAD
    }),
    // eventBus.$on('sentNote', data => {
    //   setTimeout(console.log('sent Note (compose)', data.content), 1000)})
=======
    })
    var todoStr = ''
    this.mailNote = this.$route.query.note
    console.log('mail note to compose', this.mailNote)
    this.newMail.subject = 'Your Note...'
    if (this.mailNote.type === 'todoNote') {
      console.log(this.mailNote.content)
      var str = ''
      this.mailNote.content.forEach((element, index) => {
        str += ` ${index +1}.${element.txt}`
        console.log('str', str)
      })

      console.log(this.mailNote.content)
      this.newMail.body = str
    }
    else if (this.mailNote.type === 'imgNote') {
      this.newMail.body = 'Your image URL: ' + this.mailNote.content
    }
    else this.newMail.body = this.mailNote.content
>>>>>>> 869713732d5db0d436dddfd25826e5de7e60353f
  },

  mounted() {
    this.$refs.nameInput.focus()
  },
  beforeDestory() {
    eventBus.$off('replyMail')
  }
}
