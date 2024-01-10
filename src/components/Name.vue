<template>
  <div>
    <input type="text" @keyup.enter="reverseName" v-model="$store.state.username">
    <h3>用户名：{{$store.state.username}}</h3>
    <h3>反转用户名：{{$store.getters.reversedName}}</h3>
  </div>
</template>

<script>

export default {
  name: 'Name-Vue',
  data() {
    return {
      username: '',
    }
  },
  computed : {
    // 计算属性
    reverseName() {
      return this.username.split('').reverse().join('')
    }
  },
  methods: {
    // reverseName() {
    //   this.reversedName = this.username.split('').reverse().join('')
    // }
  }

}
</script>
