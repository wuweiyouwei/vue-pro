<template>
  <div class="header">
    <textarea cols="105" rows="4" v-model="desc" placeholder="请输入BUG的描述信息"></textarea>
    <br>
    <button class="small green button" @click="saveBug">保存</button>
  </div>
</template>

<script>

export default {
  name: 'BugHeader',
  data() {
    return {
      desc: ''
    }
  },
  // props: ['saveBugCallback'],
  methods: {
    saveBug() {
      if (!this.desc.trim()) return
      // 创建 bug 对象
      let bugObj = {id: Date.now(), desc: this.desc, resolved: false}
      // 存储到数组中
      // this.saveBugCallback(bugObj)
      // 触发事件实现消息传送
      this.$emit('saveBugCallback', bugObj)
      // 清空文本域
      this.desc = ''
    }
  }
}

</script>

<style scoped>
/* header */
.header {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>