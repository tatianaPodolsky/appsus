import mailApp from './pages/mail/mail-app.js'
import keepApp from './pages/keep/keep-app.js'
import inbox from './cmps/mail/inbox-cmp.js'

const routes = [
    { path: '/mail-app', component: mailApp,children:[
        {path:'/inbox',component:inbox}
    ] },
    { path: '/keep-app', component: keepApp },
]
export default routes;