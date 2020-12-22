import Vue from 'vue'
import Router from 'vue-router'
// import VueCarousel from 'vue-carousel';

import page1 from '@/components/page1'
import page2 from '@/components/page2'
import page3 from '@/components/page3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name:"top",
      component: page1
    },
    {
      path: '/page2',
      name:"list",
      component: page2,
    },
    {
      path: '/page3',
      name:"about",
      component: page3,
      
    },
  ]
})
