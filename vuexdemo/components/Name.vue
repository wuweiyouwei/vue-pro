<template>
  <div>
    <!--    <input type="text" @keyup.enter="reverseName" v-model="$store.state.name">-->
    <input type="text" v-model="$store.state.name">
    <!--    <h3>用户名：{{$store.state.name}}</h3>-->
    <!--    <h3>反转用户名：{{$store.getters.reversedName}}</h3>-->
    <h3>用户名：{{ name }}</h3>
    <h3>反转用户名：{{ reversedName }}</h3>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'

export default {
  name: 'Name-Vue',
  data() {
    return {
      username: '',
    }
  },
  computed: {
    // 计算属性
    // reverseName() {
    //   return this.username.split('').reverse().join('')
    // }
    ...mapState(['name']),
    ...mapGetters(['reversedName'])
  },
  methods: {
    // reverseName() {
    //   this.reversedName = this.username.split('').reverse().join('')
    // }
  }

}
</script>
