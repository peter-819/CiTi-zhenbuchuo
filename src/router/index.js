import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../page/HomePage'
import neo4j from "../page/neo4j";
<<<<<<< HEAD
import ClickCreditWithoutLogin from "../page/ClickCreditWithoutLogin";
import signup from "../page/signup1";
=======
import CreditHomePage from "../page/CreditHomePage";
import ClickCreditWithoutLogin from "../page/ClickCreditWithoutLogin"
>>>>>>> e2446d9f14544bad41eb5eca76258d6ad6a053c0

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/neo4j',
      name: 'neo4j',
      component: neo4j
    },
    {
      path: '/CreditHomePage',
      name: 'CreditHomePage',
      component: CreditHomePage
    },
    {
      path: '/ClickCreditWithoutLogin',
      name: 'ClickCreditWithoutLogin',
      component: ClickCreditWithoutLogin
    },
    {
      path: '/signup1',
      name: 'signup1',
      component: signup1
    }
  ]
})
