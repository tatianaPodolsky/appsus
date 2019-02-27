import mailPreview from './mail-preview-cmp.js'
export default{
    template:`
    <section>
        <h1>Email list</h1>
        <mail-preview :mails="mails"></mail-preview>
        <
    </section>
    
    `,
    props:['mails'],
    components:{
        mailPreview,
    }
}