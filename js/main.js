import navBar from './pages/nav-bar.js'
import myRoutes from './routes.js'

const myRouter = new VueRouter({ routes: myRoutes })

window.vueApp = new Vue({
  el: '#app',
  data: {
    test: 'hi'
  },
  router: myRouter,
  components: {
  // mailApp,
  // keepApp,

  navBar}
})
