<template>
  <div>
    <h1>用户列表</h1>
    <input type="text" v-model="userName">
    <button @click="saveUser">保存用户</button>

    <ul>
      <li v-for="user in users" :key="user.id">
        用户名：{{ user.name }}
      </li>
    </ul>
    <h3>当前用户数量：{{users.length}}</h3>
    <h3>当前会员数量：{{vips.length}}</h3>
    <h3>用户名：{{ name }}</h3>
    <h3>反转用户名：{{ reversedName }}</h3>
  </div>
</template>

<script>
import {mapState,mapGetters} from "vuex";

export default {
  name: 'User-Vue',
  data() {
    return {
      userName: ''
    }
  },
  computed : {
    ...mapState(['users','vips','name']),
    ...mapGetters(['reversedName'])
  },
  methods: {
    saveUser() {
      // this.users.unshift({id: Date.now(), name: this.userName})
      this.$store.dispatch('saveUser', {id: Date.now(), name: this.userName})
    }
  }

}
</script>
