import mailPreview from './mail-preview-cmp.js'
import mailDetails from './mail-details-cmp.js'

export default{
    template:`
    <section>
        <h1>Email list</h1>
        <mail-preview @click="selectMail(mail)" v-for="mail in mails" :key="mail.id" 
        :mail="mail"></mail-preview>
        <mail-details v-if="selectedMail"></mail-details>
        
    </section>
    
    `,
    props:['mails'],
    components:{
        mailPreview,
    },
    data(){
        return{
            selectedMail:null
        }
    },
    methods:{
        selectMail(mail){
            this.selectedMail = mail
            console.log(selectedMail)
        }
    }
    
}