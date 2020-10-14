import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../page/HomePage'
import neo4j from "../page/neo4j";

import ClickCreditWithoutLogin from "../page/ClickCreditWithoutLogin";
import CreditHomePage from "../page/CreditHomePage";
import comsignup1 from "../page/comsignup1";
import comsignup2 from "../page/comsignup2";
import comsignup3 from "../page/comsignup3";

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
      path: '/comsignup1',
      name: 'comsignup1',
      component: comsignup1
    },
    {
      path: '/comsignup2',
      name: 'comsignup2',
      component: comsignup2
    },
    {
      path: '/comsignup3',
      name: 'comsignup3',
      component: comsignup3
    }
  ]
})
