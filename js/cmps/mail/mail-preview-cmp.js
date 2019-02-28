import {eventBus} from '../../event-bus.js'
export default{
    template:`
    <section  :class="{read:mail.isRead}" @click="checked(mail)" class="mail-preview" flex space-around>
            <p>From: {{mail.from}} </p>
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
            mail.isRead = true
            eventBus.$emit('mailRead',mail)
        },
        
        
    },
    created(){
            eventBus.$emit("mailRead",this.mail)
            
    }
}