import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../page/HomePage'
import neo4j from "../page/neo4j";
import ClickCreditWithoutLogin from "../page/ClickCreditWithoutLogin";

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
      path: '/ClickCreditWithoutLogin',
      name: 'ClickCreditWithoutLogin',
      component: ClickCreditWithoutLogin
    }
  ]
})
