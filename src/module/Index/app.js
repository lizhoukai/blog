/*
 * @Author: Leon
 * @Date: 2017-02-19 10:05:51
 * @Last Modified by: Leon
 * @Last Modified time: 2017-05-24 16:17:24
 */

import Vue from 'vue'
import App from './app.vue'
import filter from 'utils/filter'
import FastClick from 'fastclick'

filter(Vue)
Vue.config.devtools = true
FastClick.attach(document.body)

new Vue( // eslint-disable-line no-new
  Vue.util.extend(App)
).$mount('#app')