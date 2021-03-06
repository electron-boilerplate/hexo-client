import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/main',
      name: 'main',
      component: require('@/components/Main').default
    },
    {
      path: '/create',
      name: 'create',
      component: require('@/components/Create').default
    },
    {
      path: '/edit',
      name: 'edit',
      component: require('@/components/Edit').default
    },
    {
      path: '/settings',
      name: 'settings',
      component: require('@/components/Settings').default
    },
    {
      path: '/about',
      name: 'about',
      component: require('@/components/About').default
    },
    {
      path: '*',
      redirect: '/main'
    }
  ]
})
