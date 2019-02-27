export default{
    template:`
    <section class="mail-preview">
        <div class="flex space-around" v-for="mail in mails" :key="mail.id">
            <input v-model="mail.isRead" type="checkbox">
            <h1>From: {{mail.name}} </h1>
            <p>Subject: {{mail.subject}}</p>
            <p>content: {{mail.body}}</p>
            <p>Title: {{mail.time}}</p>
        </div>
    </section>
    
    `,
    props:['mails']
}