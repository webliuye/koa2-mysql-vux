// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import FastClick from 'fastclick'
import App from './App'
import router from './router'

import { Tabbar, TabbarItem } from 'vux'

// 引入全部组件
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

FastClick.attach(document.body)

Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.use(Mint)

Vue.prototype.MessageBox = Mint.MessageBox

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
