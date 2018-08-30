// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  // el: '#dashboard',
  components: { App },
  mounted () {
    console.log('Dashboard fragment mounted')
  },
  template: '<App/>'
}).$mount('#dashboard')
