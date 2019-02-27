import mailDetails from './mail-details-cmp.js'
import {eventBus} from '../../event-bus.js'
export default{
    template:`
    <section class="mail-preview">
        <div :class="{read:mail.isRead}" class="flex space-around">
            <input v-model="mail.isRead" @change="checked(mail)"  type="checkbox">
            <p>From: {{mail.name}} </p>
            <p>Subject: {{mail.subject}}</p>
            <p>content: {{mail.body}}</p>
            <p>{{mail.time}}</p>
        <mail-details v-if="selectedMail"></mail-details>

        </div>
    </section>
    
    `,
    data(){
        return{
            selectedMail:null
        }
    },
    components:{
        mailDetails,
        
    },

    props:['mail'],
    methods:{
        checked(mail){
            eventBus.$emit('mailRead',mail)
        },
      
     
    },
    created(){
            eventBus.$emit("mailRead",this.mail)
            
    }
}