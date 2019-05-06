import Vue from 'vue'
import Vuex from 'vuex'
import index from './pages/index/store'
import home from './pages/home/store'
import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)
export default new Vuex.Store({
    /* Vuex 数据持久化 */
    plugins: [createPersistedState({
        storage: window.sessionStorage, // localStorage or sessionStorage,
    })],
    state: {
    },
    mutations: {

    },
    actions: {

    },
    modules: {
        index,
        home
    }
})
