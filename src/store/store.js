import Vue from 'vue'
import Vuex from 'vuex'

import menu from './modules/menu'
import orders from './modules/orders'
import users from './modules/users'


// import * as actions from './actions'  //import all module
// import * as getters from './getters'  //import all module
// import * as mutations from './mutations'  //import all module

Vue.use(Vuex) //vueがvuexを使う

export const store = new Vuex.Store({
    modules: {
        menu,
        orders,
        users
    }
})