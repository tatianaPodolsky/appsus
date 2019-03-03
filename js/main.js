import mailApp from './pages/mail/mail-app.js'
import keepApp from './pages/keep/keep-app.js'
import navBar from './pages/nav-bar.js'
import myRoutes from './routes.js'
  
const myRouter = new VueRouter({ routes: myRoutes })

import { eventBus } from './event-bus.js'

window.vueApp = new Vue({
    el: '#app',
    data: {
        test: 'hi'
    },
    router: myRouter,
    components: {
        // mailApp,
        // keepApp,
        navBar
    }
})