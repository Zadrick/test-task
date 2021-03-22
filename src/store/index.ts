import Vue from 'vue'
import Vuex from 'vuex'

//whant to persist datas, but dont there is nothing about localStorage in TT

import header from './header'
import app from './app'
import home from './home'
import requests from './requests'
import options from './options'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    header,
    app,
    home,
    requests,
    options
  }
})
