import myRoutes from './routes.js'
const myRouter = new VueRouter({ routes: myRoutes })

import { eventBus } from './event-bus.js'

window.vueApp = ({
    el: '#app',
    router: myRouter,
    components: {
        mailApp,
        keepApp,
        navBar
    }
})