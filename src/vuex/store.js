import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const a = {
    // 开启命名空间
    namespaced : true,
    actions : {
        doA1() {
            console.log('doA1 actions ...')
        },
    },
    mutations : {
        DOA1() {
            console.log('doA1 mutations ...')
        }
    },
    state : {
        a : 1,
    },
    getters : {
        computedA1(){
            return 1
        }
    }
}

const b = {
    // 开启命名空间
    namespaced : true,
    actions : {
        doB1() {
            console.log('doB1 actions ...')
        },
    },
    mutations : {
        DOB1() {
            console.log('doB1 mutations ...')
        }
    },
    state : {
        b : 1,
    },
    getters : {
        computedB1(){
            return 1
        }
    }
}


export default new Vuex.Store({
    modules : {
        aModule : a,
        bModule : b
    }
})