import mailPreview from './mail-preview-cmp.js'
export default{
    template:`
    <section>
        <h1>Email list</h1>
        <mail-preview v-for="mail in mails" :key="mail.id" 
        :mail="mail"></mail-preview>
        <
    </section>
    
    `,
    props:['mails'],
    components:{
        mailPreview,
    }
}