import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import article from './modules/article'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    home,
    article
  }
})

export default store
