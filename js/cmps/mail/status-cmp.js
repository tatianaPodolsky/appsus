export default {
  template: `
    <section>
        
            <h1>Stsatus</h1>
            <div class="status-container">
                 <img  v-for="mail in 35" :key="mail.id"  :class="{hidden:mail.isRead}"  src="https://img.icons8.com/windows/32/000000/new-post.png">
                
            </div>
            <span class="percant-display">{{unreadPrecenrage}} %</span>
        </section>
    
    `,
  props: ['mails'],
  data() {
    return {

    }
  },
  methods: {
    mounted() {
      console.log(this.mails)
    }

  },
  computed: {
    unreadMails() {
      return this.mails.filter(mail => {

        return !mail.isRead
      })
    },
    unreadPrecenrage() {
      return (this.unreadMails.length / this.mails.length) * 100 | 0
    }
}}
