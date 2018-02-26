import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login.vue'
import companyLogin from '@/components/login/companyLogin.vue'
import reg from '@/components/login/reg.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/companyLogin',
      name: 'companyLogin',
      component: companyLogin
    }
  ]
})
