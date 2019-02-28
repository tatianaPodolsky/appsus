import mailApp from './pages/mail/mail-app.js'
import keepApp from './pages/keep/keep-app.js'
import mailList from './cmps/mail/mail-list-cmp.js'
import mailDetails from './cmps/mail/mail-details-cmp.js'
import mailCompose from './cmps/mail/compose-cmp.js'

const UserHome = { template: '<div>Home</div>' }

const routes = [
  {path: '/mail-app',component: mailApp,
    children: [
      { path: 'mail-list', component: mailList },
      { path: 'compose', component: mailCompose },
      { path: ':id', component: mailDetails }
      // {
      //   path: '*',
      //   name: '404',
      //   component: UserHome 
      // }
    ]
  },
  { path: '/keep-app', component: keepApp }
]
export default routes
