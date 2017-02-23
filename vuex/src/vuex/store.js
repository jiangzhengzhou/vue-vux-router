import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import com from './modules/com'
// import topics from './modules/topics'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    com
    // topics
  }
})
