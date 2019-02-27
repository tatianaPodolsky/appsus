import mailDetails from './mail-details-cmp.js'

export default{
    template:`
    <section class="mail-preview">
        <div class="flex space-around" v-for="mail in mails" :key="mail.id">
            <input @change="checked(mail)" v-model="mail.isRead" type="checkbox">
            <h1>From: {{mail.name}} </h1>
            <p>Subject: {{mail.subject}}</p>
            <p>content: {{mail.body}}</p>
            <p>{{mail.time}}</p>
        <mail-details v-if="mail.mailSelected"></mail-details>

        </div>
    </section>
    
    `,
    components:{
        mailDetails,
        
    },
    props:['mails'],
    methods:{
        checked(mail){
            console.log(this.mails)
        }
    }
}