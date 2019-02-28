import mailService from '../../services/mail-service.js'
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
        from: '',
        to: '',
        subject: '',
        body: '',
           }
    }
   
  },
  methods:{
      sendMail(){
        mailService.addMail(this.newMail)
        console.log(mailService.gMails)
   

      }
  }
}
