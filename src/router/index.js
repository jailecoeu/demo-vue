import Vue from 'vue'
import Router from 'vue-router'
import error from '../view/home/Error404'

Vue.use(Router)

export default new Router({
  routes: [{
    	path: '*',
    	component: error
  	},
    {
      path: '/error-404',
      name: 'error404',
      component: error
    },
    {
      path: '/',
      name: 'Index',
      component: require('../view/home/Index.vue')
  	},
    {
      path: '/fk',
      name: 'fk',
      component: require('../view/home/fk.vue')
    },
	{
      path: '/a',
      name: 'a',
      component: require('../view/home/A.vue')
  	},
	{
      path: '/b',
      name: 'b',
      component: require('../view/home/B.vue')
  	},
	{
      path: '/c',
      name: 'c',
      component: require('../view/home/C.vue')
  	},
  ]
})
