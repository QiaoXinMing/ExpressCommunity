import vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import actions from './actions'
import mutations from './mutations'

vue.use(Vuex);

export default new Vuex.Store({
    state,
    actions,
    mutations,
})