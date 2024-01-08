
// 引入 vuex 插件
import Vuex from 'vuex'
import Vue from "vue";

// 使用插件
Vue.use(Vuex)

const actions = {}
const mutations = {}
const state = {}

// 创建 store 对象
export default new Vuex.Store({actions, mutations, state})