import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../page/HomePage'
import neo4j from "../page/neo4j";

import ClickCreditWithoutLogin from "../page/ClickCreditWithoutLogin";
import CreditHomePage from "../page/CreditHomePage";
import charts from "../page/charts";
import comSignUp1 from "../page/comSignUp1";
import comSignUp2 from "../page/comSignUp2";
import comSignUp3 from "../page/comSignUp3";
import bankSignUp1 from "../page/bankSignUp1";
import bankSignUp2 from "../page/bankSignUp2";
import logPop from "../components/logPop.vue";
import submitContract from "../components/Credit/submitContract";
import bankLendRequire from "../page/bankLendRequire";
import signIn from "../page/signIn.vue";
import choosePop from "../components/choosePop.vue";

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
      path: '/comSignUp1',
      name: 'comSignUp1',
      component: comsignup1
    },
    {
      path: '/comSignUp2',
      name: 'comSignUp2',
      component: comsignup2
    },
    {
      path: '/comSignUp3',
      name: 'comSignUp3',
      component: comsignup3
    },
    {
      path: '/bankSignUp1',
      name: 'banKSignUp1',
      component: banksignup1
    },
    {
      path: '/bankSignUp2',
      name: 'bankSignUp2',
      component: banksignup2
    },
    {
      path:'/charts',
      name:'charts',
      component: charts
    },
    {
      path:'/logPop',
      name:'logPop',
      component: logPop
    },
    {
      path: '/submitContract',
      name:'submitContract',
      component: submitContract
    },
    {
      path: '/bankLendRequire',
      name:'bankLendRequire',
      component: bankLendRequire
    },
    {
      path: '/signIn',
      name:'signIn',
      component: signIn
    },
    {
      path:'/choosePop',
      name:'choosePop',
      component: choosePop
    },
  ]
})
