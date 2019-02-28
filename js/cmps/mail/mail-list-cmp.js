import mailPreview from './mail-preview-cmp.js'
import mailDetails from './mail-details-cmp.js'
import {eventBus} from '../../event-bus.js'

export default {
  template: `

        <section class="mail-list">
            <h1>Email list</h1>
         <router-link @click.native="selectMail(mail)"  v-for="mail in mails" :key="mail.id" :to="mail.id">
            <mail-preview  
                :mail="mail">
            </mail-preview>
        </router-link>
    </section>
    
    `,
  props: ['mails'],
  components: {
    mailPreview,
    mailDetails
  },
  data () {
    return {
      selectedMail: null
    }
  },
  methods: {
    selectMail (mail) {
      this.selectedMail = mail
      console.log(this.selectedMail)
    }
  },
  created () {
    console.log(this.mails)
  }
}
