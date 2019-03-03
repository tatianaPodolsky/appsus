import keepSearch from '../cmps/keep/keep-search-cmp.js';
import mailFilter from '../cmps/mail/mail-filter-cmp.js';
import mailService from '../services/mail-service.js'

export default {
  template: `
  <section class="main-nav-bar flex">
    <div class="links-main-nav flex" >
      <div class="link-nav">
        <router-link to="/" exact>Home</router-link>
      </div>
      <div class="link-nav" @click = "typeCmp = 'mailApp'" >
        <router-link to="/mail-app/inbox">Mail App</router-link>
      </div>
      <div class="link-nav" @click="typeCmp = 'keepApp'" >
        <router-link to="/keep-app">Keep App</router-link>
      </div>
      </div>
        <keep-alive>
          <component 
              :data="mails"
              :is="typeCmp">
          </component>
      </keep-alive>
  </section>
    `,
  data() {
    return {
      typeCmp: null,
      mails: null
    }
  },
  methods: {
      getMails(mails) {
        this.mails = mails;
      }
  },
  created() {
    let path = this.$route.path;
    if (path.includes("mail-app")) this.typeCmp = 'mailApp';
    else if (path.includes("keep-app")) this.typeCmp = 'keepApp';
    else this.typeCmp = null;
    mailService.getMails()
      .then(res => {
        this.getMails(res)
        console.log(this.mails);
      })
  },
  components: {
    mailApp: mailFilter,
    keepApp: keepSearch,
  }
}

