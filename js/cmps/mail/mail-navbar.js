import {eventBus} from '../../event-bus.js'

export default{
    template:`
    <section>
    <router-link to="/mail-app/mail-list" exact>
       <div class="unread-msg-container">
           <span>inbox</span>
          <span v-if="unreadCount" class="unread-msg-count" >{{unreadCount}}</span> 
       </div> 
    </router-link> 
        <router-link to="/mail-app/read">read emails</router-link>
    </section>
    `,
    props:['mails'],
    data(){
        return{
            unreadCount: 0
        }
    },
 
    created(){
        eventBus.$on('mailRead',(()=>{
           var unreadMails =  this.mails.filter(mail =>{
                return !mail.isRead
            })
            this.unreadCount= unreadMails.length 
        }))
    }

    
}