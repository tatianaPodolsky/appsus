import mailApp from './pages/mail/mail-app.js'
import keepApp from './pages/keep/keep-app.js'
import mailList from './cmps/mail/mail-list-cmp.js'
import mailDetails from './cmps/mail/mail-details-cmp.js'

const routes = [
    { path: 'mail-app/mail/oRZNTN', component: mailDetails },
    { path: '/mail-app', component: mailApp, children:[
        {path:'/mail-list',props:true,component:mailList},
    ] },
    { path: '/keep-app', component: keepApp },
]
export default routes;