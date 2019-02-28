import {eventBus} from '../../event-bus.js'
export default{
    template:`
    <section  :class="{read:mail.isRead}" class="mail-preview" flex space-around>
            <input v-model="mail.isRead" @change="checked(mail)"  type="checkbox">
            <p>From: {{mail.name}} </p>
            <p>Subject: {{mail.subject}}</p>
            <p>content: {{mail.body}}</p>
            <p>{{mail.time}}</p>

    </section>
    
    `,
    data(){
        return{
        }
    },
    components:{
        
        
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