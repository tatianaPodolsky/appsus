import mailService from '../../services/mail-service.js'
import utilService from '../../services/util-service.js'
import storageService from '../../services/storage-service.js'
export default {
  template: `
    
    <section class="flex column">
        <h1>New Massage</h1>
     <div>
      <label>To:</label> <input v-model="newMail.from" type="text">
     </div>  
     <div>
      <label>From:</label> <input v-model="newMail.to" type="text">
    </div> 
    <div>
       <label>Subject:</label> <input v-model="newMail.subject" type="text">
       </div>
     <div> 
      <label>Body:</label> <textarea v-model="newMail.body"></textarea>
       </div>
       <button @click="sendMail">Send</button>
    </section>
    `,
  data() {
    return {
      newMail: {
        id: utilService.makeId(),
        from: '',
        // tos: '',
        subject: '',
        body: '',
        isRead: false,
        time: Date.now()
      },
      sent: false
    }
  },
  methods: {
    sendMail() {
      mailService.addMail(this.newMail)
      setTimeout(() => {
        window.location.href = 'http://127.0.0.1:5500/#/mail-app/inbox'
      }, 2500)
    }
  }
}
