export default {
  template: `
    <section>
        
            <h1>Current Stsatus</h1>
            <div class="status-container">
                 <span style="position:absolute; display:block;text-align:center" class="percant-display">{{unreadPrecenrage}}%</span>
                <div :style="{width:unreadPrecenrage + '%'}"\
                 style=" transition:all 1s; background:linear-gradient(to left, rgba(98,50,150,0.5),rgba(100,60,200,0.7))"> 
           
               </div>
            </div>
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
