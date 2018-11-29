import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import PageA from '@/components/pageA'
import PageB from '@/components/pageB'

Router.prototype.goBack = function () {
  this.isBack = true
  window.history.go(-1)
}

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/pageA',
      name: 'pageA',
      component: PageA
    },
    {
      path: '/pageB',
      name: 'pageB',
      component: PageB
    }
  ]
})

export default router
