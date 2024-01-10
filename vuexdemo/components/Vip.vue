<template>
  <div>
    <h1>会员列表</h1>
    <input type="text" v-model="vipName">
    <button @click="saveVip">保存会员</button>

    <ul>
      <li v-for="vip in vips" :key="vip.id">
        用户名：{{ vip.name }}
      </li>
    </ul>
    <h3>当前用户数量：{{ users.length }}</h3>
    <h3>当前会员数量：{{ vips.length }}</h3>
    <h3>用户名：{{ name }}</h3>
    <h3>反转用户名：{{ reversedName }}</h3>
  </div>
</template>

<script>
import {mapState,mapGetters} from "vuex";

export default {
  name: 'Vip-Vue',
  data() {
    return {
      vipName: ''
    }
  },
  computed: {
    ...mapState(['users', 'vips', 'name']),
    ...mapGetters(['reversedName'])
  },
  methods: {
    saveVip() {
      // this.vips.unshift({id: Date.now(), name: this.vipName})
      // dispath
      this.$store.dispatch('saveVip', {id: Date.now(), name: this.vipName})
    }
  }

}
</script>
