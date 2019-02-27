import mailList from '../../cmps/mail/mail-list-cmp.js'
import mailService from '../../services/mail-service.js'
export default {
    template:`
    <section>
     <h1>Mail App</h1>
     <mail-list></mail-list>
    </section>
    `,
    components:{
        mailList,
        
    },
    created(){
      mailService.getMails().then((res)=>{
          console.log(res)
      })
    }
}
