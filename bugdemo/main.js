import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//  获取 VueComponent 构造函数
// const VueComponent = Vue.extend({})
// 创建一个共享的 vc 对象
// const globalvc = new VueComponent()

// Vue 的原型对象
// 给 Vue 的原型对象扩展一个属性 x，x 属性指向这个共享的vc对象
// 给 Vue 的原型对象扩展的这个 x 属性，其他的组件 vc 都是可以直接访问到的。
// Vue.prototype.x = globalvc

new Vue({
  render: h => h(App),
  beforeCreate() {
    // 安装全局事件总线
    Vue.prototype.$bus = this
  }
}).$mount('#app')
