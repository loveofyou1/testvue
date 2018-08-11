import Vue from 'vue'
import Router from 'vue-router'
import firstComponent from '@/components/one'
import view1 from '@/components/one/view1'
import  view2 from '@/components/one/view2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstComponent',
      component: firstComponent
    },
    {
      path: '/one/view1',
      component: view1
    }, {
      path: '/one/view2',
      component: view2
    }
  ]
})
