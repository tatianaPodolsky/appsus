import mailService from '../../services/mail-service.js'
export default {
  template: `
    <section class="single-mail">
      <div class="flex align-center">
        <img height="24" src="https://img.icons8.com/material/24/000000/person-male.png">
        <p><b>{{mail.from}}</b></p>
      </div>
      <h1>{{mail.subject}}</h1>
      <p>{{mail.body}}</p>
      <button @click="deleteMail(mail)" class="delete-btn">
          <img  title="delete" src="https://img.icons8.com/metro/26/000000/waste.png">
      </button > 

    </section>
    
    `,
  data() {
    return {
      mail: null
    }
  },
  methods: {
    deleteMail(mail) {
      mailService.removeMail(mail)
      history.go(-1)
    }
  },
  created() {
    const params = this.$route.params.id
    var selectedMail = mailService.getMailById(params)
    console.log('selected', selectedMail)
    this.mail = selectedMail
  }
}
