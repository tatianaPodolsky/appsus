import mailService from '../../services/mail-service.js'
import utilService from '../../services/util-service.js'
import storageService from '../../services/storage-service.js'
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
       </div>
       <div> 
         <label>Body:</label> <textarea rows="10" v-model="newMail.body"></textarea>
        </div>
       <button @click="sendMail">Send</button>
       
      </div>
    </form>
 
    `,
  data() {
    return {
      date: new Date(),
      newMail: {
        id: utilService.makeId(),
        from: '',
        subject: '',
        body: '',
        isRead: false,
        time: this.date
      },
      sent: false
    }
  },
  methods: {
    sendMail() {
      mailService.addMail(this.newMail)
      this.sent = true
      console.log(this.sent)
      setTimeout(function () {
        history.go(-1)
        this.sent = false
      }, 1000)
    }
  },
  computed: {
  },
  mounted() {
    this.$refs.nameInput.focus()
  }

}
