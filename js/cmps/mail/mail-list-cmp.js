import mailPreview from './mail-preview-cmp.js'
import mailDetails from './mail-details-cmp.js'

export default{
    template:`

        <section class="mail-list">
            <h1>Email list</h1>
                <router-link v-for="mail in mails" :key="mail.id" :to="mail.id">
                <mail-preview  @click.native.stop="selectMail(mail)" 
                :mail="mail">
            </mail-preview>
    </section>
</router-link>
    
    `,
    props:['mails'],
    components:{
        mailPreview,
        mailDetails,
    },
    data(){
        return{
            selectedMail:null,
        }
    },
    methods:{
        selectMail(mail){
            this.selectedMail = mail
            console.log(this.selectedMail)
        },
    
    },
    created(){
            console.log(this.mails)
    }
    
}