import mailList from '../../cmps/mail/mail-list-cmp.js'
import mailNavbar from '../../cmps/mail/mail-navbar.js'
import mailService from '../../services/mail-service.js'
export default {
    template:`
    <section class="mail-app">
     <h1>Mail App</h1>
     <mail-navbar :mails="mails"></mail-navbar>
     <mail-list :mails="mails"></mail-list>
    </section>
    `,
    data(){
        return{
            mails:[]

        }
    },
    components:{
        mailList,
        mailNavbar,
        
    },
    created(){
      mailService.getMails().then((res)=>{
        this.mails = res
      })
    }
}
