import mailService  from '../../services/mail-service.js'
export default{
    template:`
    <section>
      <h1>{{mail.subject}}</h1>
      <p><b>{{mail.from}}</b></p>
      <p>{{mail.body}}</p>
    <pre>{{mail}}</pre>

    </section>
    
    `,
    data(){
      return{
        mail:null
      }
    },
    // props:["mail"],
    created(){
      const params = this.$route.params.id
       var selectedMail=  mailService.getMailById(params)
       console.log('selected',selectedMail)
       this.mail = selectedMail
    }
}