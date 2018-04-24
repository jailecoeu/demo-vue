// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuerify from 'vuerify'
import VuerifyDirective from 'v-vuerify-next'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import vmodal from 'vue-js-modal'

import FastClick from 'fastclick'
FastClick.attach(document.body);


import NavBar from './view/components/Navbar'

Vue.use(vmodal)
Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(Vuerify)
Vue.use(VuerifyDirective)

Vue.component('modal', {
  template: '#modal-template'
})

Vue.component('navbar', NavBar)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App},
  data: {
    showModal: false,
    show: false,
    selected: 0,
    writeModel: {
      first_rating: 4,
      second_rating: 9,
      third_rating: 3
    }
  }
})

export default {
  components: {
  }
}
