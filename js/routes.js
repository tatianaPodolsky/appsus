import mailApp from './pages/mail/mail-app.js'
import keepApp from './pages/keep/keep-app.js'
import mailList from './cmps/mail/mail-list-cmp.js'
import mailDetails from './cmps/mail/mail-details-cmp.js'
import mailCompose from './cmps/mail/compose-cmp.js'
import homePage from './pages/home.js'

const routes = [
  { path: '/mail-app', component: mailApp,
    children: [
      { path: 'inbox', component: mailList },
      { path: 'compose', component: mailCompose },
      { path: ':id', component: mailDetails }

    ]
  },
  {path: '/',component: homePage},
  {path: '/keep-app', component: keepApp }
]
export default routes
